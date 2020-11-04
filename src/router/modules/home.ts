export default {
  path: '/',
  name: 'home',
  component: () => import('@/pages/home'),
  meta: {
    title: '首页',
    default: true,
    sort: 0,
    icon: 'iconfont icon-home'
  }
}
