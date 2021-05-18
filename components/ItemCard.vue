<template>
  <b-card tag="article" style="max-width: 20rem;" class="m-3">
    <nuxt-link :to="'products/' + product.id">
      <div class="position-relative">
        <b-card-img
          :src="productUrl"
          :alt="product.name"
          top
        />
        <div class="card-badge">
          <b-img
            v-for="lable in product.labels"
            :key="lable"
            class="d-block mb-2"
            :src="lable"
          />
        </div>
      </div>
    </nuxt-link>
    <b-card-body>
      <h4>
        {{ product.name }}
      </h4>
      <b-card-sub-title>
        {{ product.subBrand }}
      </b-card-sub-title>
      <b-card-text v-if="product.priceDiscount !== '0'">
        <span
        class="text-danger curPrice"
        >
        {{ product.currentPriceFmt }} SEK
        </span>
        <span
        class="small price-text-org"
          >{{ product.originalPriceFmt }} SEK
          </span>
        <span
        class="small text-danger"
        >
        -{{ product.priceDiscount }}%
        </span>
      </b-card-text>
      <b-card-text v-else>
          <span
          class="text-danger curPrice"
            >{{ product.originalPriceFmt }} SEK
            </span>
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {
        return { message: 'hello' }
      }
    }
  },
  data () {
    return {
      productUrl: `https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$el$&n=${this.product.imageFront}`
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
.card-image {
  position: relative;
  overflow: hidden;
}

.card-image img {
  border-radius: 2px 2px 0 0;
  background-clip: padding-box;
  position: relative;
  z-index: -1;
}

.card-badge {
  position: absolute;
  top: 30px;
  left: 0;
}
</style>
