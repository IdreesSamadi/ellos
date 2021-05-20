export default ({ $axios, store, commit }) => {
  $axios.onError(error => {
    console.log('error happened')
    store.commit('add_toast_data', {
      message: 'Something Went Wrong. Please Try Again!',
      type: 'error',
      variant: 'danger'
    })
    store.commit('set_loader', false)
    return Promise.resolve(false)
  })
}
