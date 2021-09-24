<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive :include="cachedViews"> -->
      <router-view :key="key" />
      <!-- </keep-alive> -->
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return ''
    },
    key() {
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 100%;
}
</style>
