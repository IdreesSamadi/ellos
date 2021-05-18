<template>
  <div
    id="loading-wrapper"
    :class="{ fade: this.$store.state.loading > 0 }"
    class="position-fixed w-100 h-100"
  >
    <div id="loading-content" class="position-relative d-block " />
  </div>
</template>

<style scoped>
.fade {
  visibility: visible !important;
  opacity: 1 !important;
  transition-delay: 0s !important;
}

#loading-wrapper {
  background: var(--light-gray);
  left: 0;
  top: 0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.5s, opacity 0.5s ease-in-out;
  z-index: 999 !important;
}

#loading-content {
  left: 50%;
  top: 50%;
  width: 170px;
  height: 170px;
  margin: -85px 0 0 -85px;
  border: 3px solid transparent;
  border-top-color: var(--dark-red);
  border-bottom-color: var(--dark-red);
  border-radius: 50%;
  animation: loader 2s ease infinite;
}

#loading-content:after {
  content: '';
  position: absolute;
  left: 15px;
  right: 15px;
  top: 15px;
  bottom: 15px;
  border: 3px solid transparent;
  border-top-color: var(--dark);
  border-bottom-color: var(--dark);
  border-radius: 50%;
  animation: loader 1.5s linear infinite;
}

#loading-content:before {
  content: '';
  position: absolute;
  left: 5px;
  right: 5px;
  top: 5px;
  bottom: 5px;
  border: 3px solid transparent;
  border-top-color: var(--danger);
  border-bottom-color: var(--danger);
  border-radius: 50%;
  animation: loader 3s linear infinite;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
