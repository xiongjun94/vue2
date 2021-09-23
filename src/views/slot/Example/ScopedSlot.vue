<template>
  <section class="container">
    <h2>scoped slot component</h2>
    <slot :user="user"></slot>
  </section>
</template>
<script>
export default {
  name: 'ScopedSlot',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      user: {
        data: '父级作用域的数据'
      }
    };
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
</style>
