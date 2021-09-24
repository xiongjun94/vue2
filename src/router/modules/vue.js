import TheLayout from '@/components/theLayout'

export default {
  path: '/vue',
  name: 'vue',
  component: TheLayout,
  alwaysShow: true,
  meta: {
    title: 'vue'
  },
  children: [
    {
      path: 'slot',
      name: 'vueSlot',
      component: () => import('@/views/vue/slot'),
      // alwaysShow: true,
      meta: {
        title: 'slot'
      },
      children: [
        {
          path: 'example',
          name: 'slotExample',
          meta: {
            title: 'example'
          },
          component: () => import('@/views/vue/slot/example')
        },
        {
          path: 'record',
          name: 'slotRecord',
          meta: {
            title: 'record'
          }
        }
      ]
    },
    {
      path: 'transferParams',
      name: 'vueTransferParams',
      meta: {
        title: 'transferParams'
      }
    }
  ]
}