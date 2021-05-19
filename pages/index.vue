<template>
  <div>
    <div class="hero">
      <div ref="heroTitle" class="hero-title position-absolute text-center">
        <h1>
          chic
        </h1>
        <h1>
          stylish
        </h1>
        <h1>
          fashionable
        </h1>
        <nuxt-link to="/products" class="px-5 mt-3 btn btn-outline-primary">
          Explore
        </nuxt-link>
      </div>
    </div>
    <div ref="intro" class="intro">
      <div class="intro-text-container">
        <h1 class="hide">
          <span ref="text01" class="intro-text">fashionable</span>
        </h1>
        <h1 class="hide">
          <span ref="text02" class="intro-text">elegant</span>
        </h1>
        <h1 class="hide">
          <span ref="text03" class="intro-text">chic</span>
        </h1>
      </div>
    </div>
    <div ref="slider" class="slider" />
  </div>
</template>

<script>
import { TimelineLite } from 'gsap'
export default {
  mounted() {
    const { heroTitle, intro, text01, text02, text03, slider } = this.$refs
    const timeline = new TimelineLite({ defaults: { ease: 'Sine.easeOut' } })
    timeline.to(text01, { y: '0%', duration: 0.5 })
    timeline.to(text02, { y: '0%', duration: 0.5 }, '-=0.25')
    timeline.to(text03, { y: '0%', duration: 0.5 }, '-=0.25')
    timeline.to(slider, { y: '-100%', duration: 1.5, delay: 0.5 })
    timeline.to(intro, { y: '-100%', duration: 1 }, '-=0.9')
    timeline.fromTo(heroTitle, { opacity: 0 }, { opacity: 1, duration: 1 })
  },
  head() {
    return {
      title: 'Wellcome',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place to shop'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/home';
</style>
