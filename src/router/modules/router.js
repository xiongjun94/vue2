import TheLayout from '@/components/theLayout'

export default {
  path: '/router',
  name: 'router',
  redirect: '/router/dynamicRouter',
  component: TheLayout,
  alwaysShow: true,
  meta: {
    title: 'router'
  },
  children: [
    {
      path: 'dynamicRouter/:name',
      name: 'routerDynamicRouter',
      component: () => import('@/views/router/dynamicRouter'),
      meta: {
        title: 'dynamicRouter'
      },
      children: [
        {
          path: 'details/:type',
          name: 'routerDynamicRouterDetails',
          meta: {
            title: 'dynamicRouterDetails'
          },
          hidden: true,
          component: () => import('@/views/router/dynamicRouter/details')
        }
      ]
    },
    {
      path: 'namedView',
      name: 'routerNamedView',
      redirect: 'namedView/children',
      component: () => import('@/views/router/namedView'),
      meta: {
        title: 'namedView'
      },
      children: [
        {
          path: 'children',
          name: 'namedViewChildren',
          hidden: true,
          // 使用命名视图时key为components
          components: {
            viewA: () => import('@/views/router/namedView/ViewA'),
            viewB: () => import('@/views/router/namedView/ViewB'),
            viewC: () => import('@/views/router/namedView/ViewC')
          }
        }
      ]
    },
    {
      path: 'transferParams',
      name: 'transferParams',
      meta: {
        title: 'transferParams'
      },
      component: () => import('@/views/router/transferParams')
    }
  ]
}
