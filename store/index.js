import { data } from '@/assets/data'
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
  set_loader: state => (state.loading = !state.loading),
  set_product_list_data: (state, payload) =>
    (state.productListPage = { ...state.productListPage, ...payload }),
  set_products: (state, payload) => {
    state.products = [...state.products, ...payload]
    console.log('mutation', state.products)
    return state.products
  },
  set_pagination: (state, payload) => (state.pagination = payload),
  set_wishlist: (state, payload) => state.wishlist.push(payload),
  remove_wishlistItem: (state, payload) =>
    (state.wishlist = state.wishlist.filter(item => item.id !== payload))
}
export const actions = {
  productData: async ({ state, commit }, payload) => {
    commit('set_loader')
    await commit('set_product_list_data', data.data.getProductListPage)
    await commit('set_products', data.data.getProductListPage.articles)
    // await commit('set_pagination', data.data.getProductListPage.pagination[0])
    commit('set_loader')
  },
  moreProduct: async ({ state, commit }) => {
    const product = await Api.get(
      `/articles${state.productListPage.pagination[0].next}`,
      {
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
    // const product = [
    //   {
    //     __typename: 'Article',
    //     id: '7011128-0122',
    //     name: 'Regnbyxor Roger22222',
    //     nameSeo: 'regnbyxor-roger',
    //     subBrand: 'Ellos Kids',
    //     subBrandSeo: 'ellos-kids',
    //     currentPriceFmt: '187',
    //     originalPriceFmt: '249',
    //     priceDiscount: '25',
    //     imageFront: 'ell_7011128-01_Fs',
    //     imageAlternative: 'ell_7011128-01_Bs',
    //     relatedArticles: [
    //       {
    //         __typename: 'RelatedArticle',
    //         image: 'ell_7011128-02_Ff_M0053192',
    //         id: '7011128-02'
    //       }
    //     ],
    //     skusData: [
    //       {
    //         __typename: 'SkuData',
    //         sku: '7011128-01-07',
    //         size: '86/92',
    //         inStock: true,
    //         stockType: 0
    //       },
    //       {
    //         __typename: 'SkuData',
    //         sku: '7011128-01-11',
    //         size: '98/104',
    //         inStock: true,
    //         stockType: 0
    //       },
    //       {
    //         __typename: 'SkuData',
    //         sku: '7011128-01-15',
    //         size: '110/116',
    //         inStock: true,
    //         stockType: 0
    //       },
    //       {
    //         __typename: 'SkuData',
    //         sku: '7011128-01-21',
    //         size: '122/128',
    //         inStock: true,
    //         stockType: 0
    //       },
    //       {
    //         __typename: 'SkuData',
    //         sku: '7011128-01-27',
    //         size: '134/140',
    //         inStock: true,
    //         stockType: 0
    //       }
    //     ],
    //     labels: [
    //       'https://c1.adis.ws/c/ellos/label_CampaignPriceELL_se?u=133',
    //       'https://c1.adis.ws/c/ellos/label_BetterChoiceELL_se'
    //     ],
    //     energyLabel: null
    //   }
    // ]
    // commit('set_product_list_data', product.data.data.getProductListPage)
    commit('set_products', product.data.data.getProductListPage.articles)
    // commit('set_pagination', product.data.data.getProductListPage.pagination[0])
    // commit('set_products', product)
  },
  toast: ({ commit }, payload) => {
    commit('add_toast_data', payload)
  }
}
