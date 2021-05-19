<template>
  <b-card style="max-width: 20rem;" class="m-3 overflow-hidden">
    <nuxt-link :to="'products/' + product.id">
      <div class="position-relative">
        <transition>
          <b-card-img
            class="card-item-img"
            :src="
              'https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$el$&n=' +
                product.imageFront
            "
            :alt="product.name"
            top
          />
        </transition>
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
        <span class="text-danger curPrice">
          {{ product.currentPriceFmt }} SEK
        </span>
        <span class="small price-text-org"
          >{{ product.originalPriceFmt }} SEK
        </span>
        <span class="small text-danger"> -{{ product.priceDiscount }}% </span>
      </b-card-text>
      <b-card-text v-else>
        <span class="text-danger curPrice"
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
.card-badge {
  position: absolute;
  top: 30px;
  left: 0;
}
.card-item-img {
  transition: transform 1s ease-in-out, opacity 250ms linear;
}

.card-item-img:hover {
  transform: scale(1.3);
  opacity: 0.8;
}
</style>
