<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <nuxt-link to="/">
      <b-navbar-brand id="logo">
        Ellos App
      </b-navbar-brand>
    </nuxt-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/wishlist">Wishlist</b-nav-item>
        <b-nav-item to="/products">Products</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
#logo {
  font-family: 'Lobster', cursive;
  font-weight: lighter;
  font-size: 2rem;
  padding: 0;
}
</style>
