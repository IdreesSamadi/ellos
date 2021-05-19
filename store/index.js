import { Api } from '@/Api'

export const state = () => ({
  products: [],
  productListPage: {},
  pagination: {},
  loading: false,
  toastMessages: {},
  product: {},
  wishlist: []
})

export const getters = {
  getProductById: state => id =>
    state.products.find(product => product.id === id)
}

export const mutations = {
  add_toast_data: (state, toastMessage) => (state.toastMessages = toastMessage),
  set_loader: (state, payload) => (state.loading = payload),
  set_product_list_data: (state, payload) =>
    (state.productListPage = { ...state.productListPage, ...payload }),

  set_products: (state, payload) => (state.products = payload),

  set_paginated_products: (state, payload) =>
    (state.products = [...state.products, ...payload]),

  set_pagination: (state, payload) => (state.pagination = payload),
  set_wishlist: (state, payload) => {
    for (const item of state.wishlist)
      if (item.id === payload.id) {
        return state.wishlist
      }
    return state.wishlist.push(payload)
  },
  remove_wishlistItem: (state, payload) =>
    (state.wishlist = state.wishlist.filter(item => item.id !== payload))
}
export const actions = {
  productData: async ({ commit }) => {
    commit('set_loader', true)
    let products
    try {
      products = await Api.get('/articles?path=dam')
    } catch (error) {
      commit('add_toast_data', {
        message: 'Something Went Wrong. Please Try Again!',
        type: 'error',
        variant: 'danger'
      })
      commit('set_loader', false)
    }
    commit('set_loader', false)
    commit('set_product_list_data', products.data.data.getProductListPage)
    commit('set_products', products.data.data.getProductListPage.articles)
  },
  moreProduct: async ({ state, commit }) => {
    commit('set_loader', true)
    let products
    try {
      products = await Api.get(
        `/articles${state.productListPage.pagination[0].next}`
      )
    } catch (error) {
      commit('add_toast_data', {
        message: 'Something Went Wrong. Please Try Again!',
        type: 'error',
        variant: 'danger'
      })
      commit('set_loader', false)
    }
    commit(
      'set_paginated_products',
      products.data.data.getProductListPage.articles
    )
    commit('set_loader', false)
  }
}
