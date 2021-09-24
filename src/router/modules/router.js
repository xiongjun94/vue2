import TheLayout from '@/components/TheLayout'

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
      name: 'dynamicRouter',
      component: () => import('@/views/router/DynamicRouter'),
      meta: {
        title: 'dynamicRouter'
      }
    },
    {
      path: 'details/:type',
      name: 'dynamicRouterDetails',
      meta: {
        title: 'dynamicRouterDetails'
      },
      component: () => import('@/views/router/DynamicRouter/Details')
    },
    {
      path: 'transferParams',
      name: 'transferParams',
      meta: {
        title: 'transferParams'
      },
      component: () => import('@/views/router/TransferParams')
    }
  ]
}