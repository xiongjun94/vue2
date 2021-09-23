<template>
  <div class="app-wrapper">
    <sidebar></sidebar>
    <div></div>
  </div>
</template>
<script>
import { Sidebar } from './components'

export default {
  name: 'Index',
  components: {
    Sidebar
  },
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
