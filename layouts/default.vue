<template>
  <div>
    <Loader />
    <Nuxt />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.watch(
      state => state.toastMessages,
      toastMessages => {
        this.$bvToast.toast(toastMessages.message, {
          title: `${toastMessages.type.toUpperCase()} !`,
          autoHideDelay: 3000,
          toaster: 'b-toaster-top-center',
          variant: toastMessages.variant
        })
      }
    )
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
