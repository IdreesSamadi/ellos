<template>
  <div>
    <Navbar />
    <b-container>
      <nuxt-link class="btn btn-light my-2" to="/">
        Go Home
      </nuxt-link>
      <h1>Wishlist</h1>
      <b-alert :show="wishlist.length === 0">Your Wish List is Empty</b-alert>
      <b-list-group>
        <b-list-group-item v-for="item in wishlist" :key="item.id">
          <b-row align-h="center" align-v="center">
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
            <b-col md="4" class="p-2">
              <nuxt-link :to="'/products/' + item.id">{{
                item.name
              }}</nuxt-link>
            </b-col>
            <b-col md="3" class="p-2">{{ item.currentPriceFmt }} SEK</b-col>
            <b-col md="2">
              <b-button
                @click="remove_wishlistItem(item.id)"
                type="button"
                variant="danger"
                block
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
  },
  head() {
    return {
      title: 'Wish List',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'place to checkout all your favorite items'
        }
      ]
    }
  }
}
</script>
