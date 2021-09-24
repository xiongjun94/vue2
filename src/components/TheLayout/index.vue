<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>
<script>
import { Sidebar, AppMain } from './components'

export default {
  name: 'TheLayout',
  components: {
    Sidebar,
    AppMain
  },
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>

$sidebarWidth: 250px;

.app-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  .sidebar-container {
    width: $sidebarWidth;
  }
  .main-container {
    width: calc(100% - #{$sidebarWidth});
  }
}
</style>
