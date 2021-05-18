<template>
  <b-container class="mt-5">
    <nuxt-link class="btn btn-light" to="/">
      Go Home
    </nuxt-link>
    <b-row>
      <b-col>
        <h1 class="my-4">Latest Products</h1>
      </b-col>
      <b-col lg="3">
        <b-form-select v-model="selected" :value="sort" class="mb-3">
          <template #first>
            <b-form-select-option :value="null" disabled>Sort Products</b-form-select-option>
          </template>
          <b-form-select-option
            v-for="option in productListPage.sort"
            :key="option.label"
            :value="option.value"
          >{{option.label}}
          </b-form-select-option>
    </b-form-select>
      </b-col>
    </b-row>
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
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      selected: null
    }
  },
  computed: {
    ...mapState(['productListPage', 'products', 'sort', 'pagination'])
  },
  created () {
    this.$store.dispatch('productData')
  },
  methods: {
    ...mapActions(['moreProduct'])
  }
}
</script>

<style scoped></style>
