import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'

Vue.use(Vuex)

function fetchGlobalNameMock() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random())
    }, 1000)
  })
}

const store = new Vuex.Store({
  state: {
    globalName: '全局属性'
  },
  mutations: {
    SET_GLOBAL_NAME(state, globalName) {
      state.globalName = globalName
    }
  },
  actions: {
    async SetGlobalNameAsync(context) {
      const globalName = await fetchGlobalNameMock()
      context.commit('SET_GLOBAL_NAME', globalName)
      return globalName
    }
  },
  modules: {
    user
  }
})

export default store
