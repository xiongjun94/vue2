import TheLayout from '@/components/theLayout'

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
        title: 'example'
      },
      component: () => import('@/views/vuex/example'),
    },
    {
      path: 'record',
      name: 'vuexRecord',
      meta: {
        title: 'record'
      },
      component: () => import('@/views/vuex/record'),
    }
  ]
}