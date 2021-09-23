import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import TheLayout from '@/components/TheLayout' 

const router = new VueRouter({

  // 以下为默认值 
  mode: 'hash', // history
  base: '/', // 应用的基路径
  linkActiveClass: 'router-link-active', // router-link 激活的class
  linkExactActiveClass: 'router-link-exact-active', // router-link 精确激活的class

  routes: [
    {
      path: '/',
      component: TheLayout,
      hidden: true,
      children: [
      ]
    },
    {
      path: '/vuex',
      name: 'vuex',
      redirect: '/vuex/example',
      children: [
        {
          path: 'example',
          name: 'vuexExample',
          component: () => import('@/views/vuex/Example'),
        },
        {
          path: 'record',
          name: 'vuexRecord',
          component: () => import('@/views/vuex/Record'),
        }
      ]
    },
    {
      path: '/slot',
      name: 'slot',
      redirect: '/slot/example',
      children: [
        {
          path: 'example',
          name: 'slotExample',
          component: () => import('@/views/slot/Example')
        }
      ]
    }
  ],

  // 设置路由出口的滚动条行为
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

