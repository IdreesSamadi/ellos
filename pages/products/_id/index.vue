<template>
  <div>
    <Navbar />
    <b-container>
      <nuxt-link class="btn btn-light my-4" to="/">
        Go Home
      </nuxt-link>
      <b-row>
        <b-col lg="6">
          <b-img
            :src="
              'https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$el$&n=' +
                product.imageFront
            "
            :alt="product.name"
            style="height: 600px; width: 100%; object-fit: cover;"
            fluid
            rounded
          ></b-img>
        </b-col>
        <b-col lg="3">
          <b-list-group flush>
            <b-list-group-item
              ><h3>{{ product.name }}</h3></b-list-group-item
            >
            <b-list-group-item>Brand: {{ product.subBrand }}</b-list-group-item>
            <b-list-group-item v-if="product.priceDiscount !== '0'">
              <span class="text-danger curPrice">
                {{ product.currentPriceFmt }} SEK
              </span>
              <span class="small price-text-org"
                >{{ product.originalPriceFmt }} SEK
              </span>
              <span class="font-weight-bold text-danger">
                &nbsp;&nbsp;-{{ product.priceDiscount }}%
              </span>
            </b-list-group-item>
            <b-list-group-item v-else>
              <span class="text-danger curPrice"
                >{{ product.originalPriceFmt }} SEK
              </span>
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col>
          <b-card>
            <b-list-group flush>
              <b-list-group-item
                ><b-row>
                  <b-col>Price:</b-col>
                  <b-col>
                    <strong>${{ product.currentPriceFmt }}</strong>
                  </b-col>
                </b-row></b-list-group-item
              >
              <b-list-group-item>
                <b-row>
                  <b-col>Status:</b-col>
                  <b-col>
                    {{ product.skusData ? 'In Stock' : 'Out Of Stock' }}
                  </b-col>
                </b-row></b-list-group-item
              >
              <b-list-group-item>
                <b-row>
                  <b-col>
                    <b-form-select :value="null" v-model="selected">
                      <template #first>
                        <b-form-select-option :value="null" disabled
                          >Select Size</b-form-select-option
                        >
                      </template>
                      <b-form-select-option
                        v-for="size in options"
                        :key="size.sku"
                        :value="size.sku"
                        >{{ size.size }}
                      </b-form-select-option>
                    </b-form-select>
                  </b-col>
                </b-row></b-list-group-item
              >
              <b-list-group-item>
                <b-button
                  @click="addToWishlist(product)"
                  block
                  variant="primary"
                >
                  Add To Wishlist
                </b-button></b-list-group-item
              >
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      product: {},
      selected: null,
      options: []
    }
  },
  computed: {
    ...mapGetters(['getProductById'])
  },
  mounted() {
    this.product = this.getProductById(this.$route.params.id)
    this.options = this.product.skusData.filter(s => s.inStock)
  },
  methods: {
    ...mapMutations(['set_wishlist']),
    addToWishlist(product) {
      this.set_wishlist(product)
      this.$router.push('/wishlist')
    }
  },
  head() {
    return {
      title: this.product.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.product.nameSeo} ${this.product.subBrandSeo}`
        }
      ]
    }
  }
}
</script>

<style scoped>
.curPrice {
  font-family: sans-serif;
  font-weight: 700;
}
.price-text-org {
  text-decoration: line-through;
}
</style>
