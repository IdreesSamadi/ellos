<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>
      NavBar
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 15vh;
  width: 100%;
  background: transparent;
  position: absolute;
  z-index: 10;
}
.nav-links {
  display: flex;
  list-style: none;
}
.nav-links li {
  padding-left: 5rem;
  font-size: 1.2rem;
}
#logo {
  font-family: 'Lobster', cursive;
  font-weight: lighter;
  font-size: 2rem;
}
</style>
