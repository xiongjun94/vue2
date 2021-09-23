<template>
  <section class="container">
    <div>
      <h3>root store</h3>
      <p>globalName: {{ globalName }}</p>
      <button @click="resetGlobalName">resetGlobalName</button>
      <button @click="setGlobalNameAsync">setGlobalName</button>
    </div>
    <div>
      <h3>modules store</h3>
      <p>name: {{ name }}</p>
      <button @click="changeName">changeName</button>
      <p>age: {{ age }}</p>
      <button @click="changeAge">changeAge</button>
      <button @click="setNameAsync">setNameAsync</button>
      <p>dislikeList:</p>
      <li v-for="(item, index) in dislikeList" :key="index">{{ item }}</li>
    </div>
  </section>
</template>
<script>
import store from '@/store'; // 等价于this.$store
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'; // 辅助函数

export default {
  name: 'Example',
  computed: {
    ...mapState(['globalName']),
    // globalName() {
    //   return this.$store.state.globalName
    // },

    ...mapGetters('user', ['dislikeList']),

    ...mapState('user', ['age']),

    name() {
      return store.state.user.name;
    }
  },
  methods: {
    resetGlobalName() {
      store.commit('SET_GLOBAL_NAME', ' ');
    },

    async setGlobalNameAsync() {
      const globalName = await store.dispatch('SetGlobalNameAsync');
      console.log(globalName);
    },

    ...mapActions('user', ['SetNameAsync']),
    setNameAsync() {
      this.SetNameAsync().then(res => {
        console.log(res);
      });
    },

    ...mapMutations('user', ['SET_AGE']),
    changeAge() {
      this.SET_AGE(1);
    },

    changeName() {
      if (this.name === 'XIONGJUN') {
        store.commit('user/SET_NAME', 'JAYLEN');
      } else {
        store.commit('user/SET_NAME', 'XIONGJUN');
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
}
.container > div {
  width: 300px;
  background: lightcyan;
  margin-right: 20px;
}
</style>
