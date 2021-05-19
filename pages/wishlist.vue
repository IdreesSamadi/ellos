<template>
  <div>
    <Navbar />
    <b-container>
      <nuxt-link class="btn btn-light my-4" to="/">
        Go Home
      </nuxt-link>
      <h1>Shopping Cart</h1>
      <b-list-group>
        <b-list-group-item v-for="item in wishlist" :key="item.id">
          <b-row align-content="center" align-h="center" align-v="center">
            <b-col md="2">
              <b-img
                :src="
                  'https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$el$&n=' +
                    item.imageFront
                "
                :alt="item.name"
                fluid
                rounded="circle"
              />
            </b-col>
            <b-col md="4">
              <nuxt-link :to="'/products/' + item.id">{{
                item.name
              }}</nuxt-link>
            </b-col>
            <b-col md="3" class="text-center"
              >{{ item.currentPriceFmt }} SEK</b-col
            >
            <b-col md="3">
              <b-button
                @click="remove_wishlistItem(item.id)"
                type="button"
                variant="danger"
              >
                remove
              </b-button>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['wishlist'])
  },
  methods: {
    ...mapMutations(['remove_wishlistItem'])
  }
}
</script>
