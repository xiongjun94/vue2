<template>
  <el-menu 
   mode="vertical"
   >
    <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
  </el-menu>
</template>
<script>
import SidebarItem from './SidebarItem.vue';
import { mapState } from 'vuex';

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState('permission', ['routes'])
  },
  watch: {},
  mounted() {
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.container {
}
</style>
