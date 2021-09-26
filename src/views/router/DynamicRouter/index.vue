<template>
  <section class="container">
    <div>
      <h3>dynamic router params</h3>
      <p>name: {{ params }}</p>
      <el-button @click="goBack">go back</el-button>
    </div>
    <div>
      <h3>children router params</h3>
      <el-button @click="skipToChilren">skip to children route</el-button>
      <router-view />
    </div>
  </section>
</template>
<script>
export default {
  name: 'DynamicRouter',
  data() {
    return {
      childrenRouterParams: 'test'
    }
  },
  computed: {
    params() {
      const { name } = this.$route.params || ''
      return name
    }
  },
  watch: {

  },
  mounted() {

  },
  methods: {
    skipToChilren() {
      this.$router.push({
        path: `/router/dynamicRouter/${this.params}/details/${Math.random()}`
      })
    },
    goBack() {
      this.$router.push({
        path: `/router/dynamicRouter/${Math.random()}`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
}
</style>
