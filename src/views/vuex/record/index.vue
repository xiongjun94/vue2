<template>
  <section class="container">
    <div>
      <h3>v-model use vuex</h3>
      <p>
        <el-input v-model="message" />
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Record',
  computed: {
    message: {
      get() {
        return this.$store.state.test.message
      },
      set(val) {
        this.$store.commit('test/SET_MESSAGE', val)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
}
</style>
