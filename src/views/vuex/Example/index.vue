<template>
  <section class="container">
    <div>
      <h3>root store</h3>
      <p>globalName: {{ globalName }}</p>
      <el-button @click="resetGlobalName">resetGlobalName</el-button>
      <el-button @click="setGlobalNameAsync">setGlobalName</el-button>
    </div>
    <div>
      <h3>modules store</h3>
      <p>name: {{ name }}</p>
      <el-button @click="changeName">changeName</el-button>
      <el-button @click="setNameAsync">setNameAsync</el-button>
      <p>age: {{ age }}</p>
      <el-button @click="changeAge">changeAge</el-button>
      <p>getterList:</p>
      <li v-for="(item, index) in getterList" :key="index">{{ item }}</li>
    </div>
  </section>
</template>
<script>
import store from '@/store' // 等价于this.$store
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex' // 辅助函数

export default {
  name: 'Example',
  computed: {
    ...mapState(['globalName']),
    // globalName() {
    //   return this.$store.state.globalName
    // },

    ...mapGetters('test', ['getterList']),

    ...mapState('test', ['age']),

    name() {
      return store.state.test.name
    }
  },
  methods: {
    resetGlobalName() {
      store.commit('SET_GLOBAL_NAME', ' ')
    },

    async setGlobalNameAsync() {
      const globalName = await store.dispatch('SetGlobalNameAsync')
      console.log(globalName)
    },

    ...mapActions('test', ['SetNameAsync']),
    setNameAsync() {
      this.SetNameAsync().then(res => {
        console.log(res)
      })
    },

    ...mapMutations('test', ['SET_AGE']),
    changeAge() {
      this.SET_AGE(1)
    },

    changeName() {
      if (this.name === 'XIONGJUN') {
        store.commit('test/SET_NAME', 'JAYLEN')
      } else {
        store.commit('test/SET_NAME', 'XIONGJUN')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  & > div {
    width: 300px;
    background: lightblue;
    margin-right: 20px;
  }
  p {
    margin: 10px 0;
  }
}
</style>
