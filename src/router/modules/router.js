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
      path: 'transferParams',
      name: 'transferParams',
      meta: {
        title: 'transferParams'
      },
      component: () => import('@/views/router/transferParams')
    }
  ]
}
