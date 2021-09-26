import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import modulesRouter from './modules/router'
import modulesVuex from './modules/vuex'
import modulesVue from './modules/vue'

export const routes = [
  {
    path: '/',
    redirect: '/vuex',
    hidden: true
  },

  // 路由过多时分模块引入
  modulesVuex,
  modulesRouter,
  modulesVue,

  // 404页面必须放到最后
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new VueRouter({

  // 以下为默认值
  mode: 'hash', // history
  base: '/', // 应用的基路径
  linkActiveClass: 'router-link-active', // router-link 激活的class
  linkExactActiveClass: 'router-link-exact-active', // router-link 精确激活的class

  routes,

  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
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

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router

