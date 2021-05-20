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
  set_products: (state, payload) => (state.products = payload),
  set_pagination: (state, payload) => (state.pagination = payload),

  set_product_list_data: (state, payload) =>
    (state.productListPage = { ...state.productListPage, ...payload }),

  set_paginated_products: (state, payload) =>
    (state.products = [...state.products, ...payload]),

  remove_wishlistItem: (state, payload) =>
    (state.wishlist = state.wishlist.filter(item => item.id !== payload)),

  set_wishlist: (state, payload) => {
    for (const item of state.wishlist)
      if (item.id === payload.id) {
        return state.wishlist
      }
    return state.wishlist.push(payload)
  }
}
export const actions = {
  async productData({ commit }) {
    commit('set_loader', true)
    try {
      const { data } = await this.$axios.$get('/api/articles?path=dam')
      commit('set_product_list_data', data.getProductListPage)
      commit('set_products', data.getProductListPage.articles)
      commit('set_loader', false)
    } catch (error) {
      console.log(error)
    }
  },
  async moreProduct({ state, commit }) {
    commit('set_loader', true)
    try {
      const { data } = await this.$axios.$get(
        `/api/articles${state.productListPage.pagination[0].next}`
      )
      console.log(data)
      commit('set_paginated_products', data.getProductListPage.articles)
      commit('set_loader', false)
    } catch (error) {
      console.log(error)
    }
  }
}
