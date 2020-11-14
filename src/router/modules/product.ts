export default {
  path: '/product',
  component: () => import('@/pages/product'),
  redirect: '/product/index',
  meta: {
    default: true,
    title: '商品管理',
    sort: 3,
    icon: 'iconfont icon-shopping'
  },
  children: (name => [
    {
      path: 'index',
      name: `${name}-index`,
      component: () => import('@/pages/product/views'),
      meta: {
        title: '商品列表'
      }
    }
  ])('product')
}
