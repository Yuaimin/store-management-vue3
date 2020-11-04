export default {
  path: '/signin/:id?',
  name: 'signin',
  component: () => import('@/pages/signin'),
  meta: {
    title: '登录'
  }
}
