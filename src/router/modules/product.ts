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
      component: () => import('@/pages/product/views/index'),
      meta: {
        title: '商品列表'
      }
    },
    {
      path: 'detail/:id',
      name: `${name}-detail`,
      component: () => import('@/pages/product/views/detail'),
      meta: {
        title: '商品详情',
        hidden: true
      }
    },
    {
      path: 'attribute',
      name: `${name}-attribute`,
      component: () => import('@/pages/product/views/attribute'),
      meta: {
        title: '商品属性'
      }
    },
    {
      path: 'createAttribute',
      name: `${name}-createAttribute`,
      component: () => import('@/pages/product/views/attribute/create'),
      meta: {
        title: '创建属性',
        hidden: true
      }
    },
    {
      path: 'specification',
      name: `${name}-specification`,
      component: () => import('@/pages/product/views/specification'),
      meta: {
        title: '商品规格'
      }
    }
  ])('product')
}
