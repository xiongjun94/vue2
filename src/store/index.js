import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

function fetchGlobalNameMock() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random())
    }, 1000)
  })
}

const store = new Vuex.Store({
  state: {
    globalName: 'global attribute'
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
  modules
})

export default store
