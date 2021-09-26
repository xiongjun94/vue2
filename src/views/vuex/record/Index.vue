<template>
  <section class="container">
    <div>
      <h3>(1) v-model use vuex state</h3>
      <el-row type="flex" align="middle">
        <el-col :span="2">
          <span>message:</span>
        </el-col>
        <el-col :span="4">
          <el-input v-model="message" />
        </el-col>
      </el-row>
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
}
</style>
