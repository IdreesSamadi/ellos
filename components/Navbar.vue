<template>
  <nav>
    <h1 id="logo">
      EllosApp
    </h1>
    <ul class="nav-links">
      <li>
        Home
      </li>
      <li>
        Products
      </li>
    </ul>
  </nav>
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
