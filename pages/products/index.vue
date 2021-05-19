<template>
  <div>
    <Navbar />
    <b-container>
      <nuxt-link class="btn btn-light my-2" to="/">
        Go Home
      </nuxt-link>
      <h1 class="my-1">Latest Products</h1>
      <b-Row align-h="center">
        <b-Col
          v-for="product in products"
          :key="product.id"
          sm="{12}"
          md="{6}"
          lg="{4}"
          xl="{3}"
        >
          <ItemCard :product="product" />
        </b-Col>
      </b-Row>
      <b-row>
        <b-col class="d-flex align-content-center justify-content-center">
          <b-button @click="moreProduct" variant="primary" class="my-5">
            Show More Products
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['productListPage', 'products'])
  },
  created() {
    this.$store.dispatch('productData')
  },
  methods: {
    ...mapActions(['moreProduct'])
  },
  head() {
    if (this.productListPage.category) {
      return {
        title: this.productListPage.category.pageTitle,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.productListPage.category.pageDescription
          }
        ]
      }
    }
  }
}
</script>
