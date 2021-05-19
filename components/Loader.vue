<template>
  <div
    id="loading-wrapper"
    :class="{ fade: this.$store.state.loading > 0 }"
    class="position-fixed w-100 h-100"
  >
    <div id="loading-content" class="position-relative d-block " />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/loader';
</style>
