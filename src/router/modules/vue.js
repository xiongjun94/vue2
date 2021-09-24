import TheLayout from '@/components/TheLayout'

export default {
  path: '/vue',
  name: 'vue',
  redirect: '/vue/example',
  component: TheLayout,
  alwaysShow: true,
  meta: {
    title: 'vue'
  },
  children: [
    {
      path: 'example',
      name: 'slotExample',
      meta: {
        title: 'slotExample'
      },
      component: () => import('@/views/vue/slot/Example')
    }
  ]
}