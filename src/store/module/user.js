function fetchNameMock() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('随机数：' + Math.random().toFixed(2))
    }, 1000)
  })
}

export default {
  namespaced: true,
  state: {
    name: 'XIONGJUN',
    age: 18,
    likeList: [1, 2, 3, 4, 5, 6]
  },
  mutations: {
    SET_NAME(state, name) {
      state.name = name
    },
    SET_AGE(state, age) {
      state.age += age
    }
  },
  actions: {
    async SetNameAsync(context) {
      const random = await fetchNameMock()
      context.commit('SET_NAME', random)
      return random
    }
  },
  getters: {
    // eslint-disable-next-line no-unused-vars
    dislikeList: (state, getters) => state.likeList.filter(item => item % 2 === 0) 
  }
}
