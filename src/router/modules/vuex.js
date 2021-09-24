import TheLayout from '@/components/TheLayout'

export default {
  path: '/vuex',
  name: 'vuex',
  redirect: '/vuex/example',
  component: TheLayout,
  alwaysShow: true,
  meta: {
    title: 'vuex'
  },
  children: [
    {
      path: 'example',
      name: 'vuexExample',
      meta: {
        title: 'vuexExample'
      },
      component: () => import('@/views/vuex/Example'),
    },
    {
      path: 'record',
      name: 'vuexRecord',
      meta: {
        title: 'vuexRecord'
      },
      component: () => import('@/views/vuex/Record'),
    }
  ]
}