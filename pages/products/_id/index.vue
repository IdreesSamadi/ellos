<template>

  <div></div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        product: this.getProductById($route.params.id)
      }
    },
    computed: {
      ...mapGetters(['getProductById'])
    },
    created() {
      // this.getProductById($route.params.id)
    }
  }
</script>

<style scoped>

</style>
