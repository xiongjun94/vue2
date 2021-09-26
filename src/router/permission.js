import router from './index'

router.beforeEach((to, from, next) => {
  // console.log(to, from)
  next()
})

router.afterEach((to, from) => {
  // console.log(to, from)
})
