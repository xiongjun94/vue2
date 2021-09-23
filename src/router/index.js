import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash', // history
  base: '/', // 应用的基路径
  linkActiveClass: 'router-link-active', // router-link 激活的class
  linkExactActiveClass: 'router-link-exact-active', // router-link 精确激活的class
  // 以上为默认值
  routes: [
    {
      path: '/',
      redirect: '/vuex'
    },
    {
      path: '/vuex',
      name: 'vuex',
      redirect: '/vuex/api',
      children: [
        {
          path: 'api',
          name: 'api',
          component: () => import('@/views/vuex/api/Index.vue'),
        },
        {
          path: 'record',
          name: 'record',
          component: () => import('@/views/vuex/record/Index.vue'),
        }
      ]
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('@/views/slot/Index.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(document.body.scrollTop)
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPositionY = document.body.scrollTop
        from.meta.savedPositionX = document.body.scrollLeft
      }
      return {
        x: to.meta.savedPositionX || 0,
        y: to.meta.savedPositionY || 0
      }
    }
  }
})

export default router

