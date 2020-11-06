export default {
  path: '/children',
  component: () => import('@/pages/children'),
  redirect: '/children/index',
  meta: {
    default: true,
    title: 'test',
    sort: 2,
    icon: 'iconfont icon-USB'
  },
  children: (name => [
    {
      path: 'index',
      name: `${name}-index`,
      component: () => import('@/pages/children/views'),
      meta: {
        title: 'index'
      }
    },
    {
      path: 'children',
      name: `${name}-children`,
      component: () => import('@/pages/children/views/children'),
      meta: {
        title: 'children'
      }
    },
    {
      path: 'test',
      name: `${name}-test`,
      component: () => import('@/pages/children/views/test'),
      meta: {
        hidden: true,
        title: 'test'
      }
    }
  ])('children')
}
