import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const files = require.context('./modules', false, /.ts$/)

const defaultRoutes = files
  .keys()
  .map(item => files(item).default)
  .filter(item => item?.meta?.default)

const publicRoutes = files
  .keys()
  .map(item => files(item).default)
  .filter(item => !item?.meta?.default)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/default'),
    children: defaultRoutes
  },
  {
    path: '/',
    component: () => import('@/layouts/public'),
    children: [
      ...publicRoutes,
      {
        path: '/404',
        name: '404',
        component: () => import('@/pages/error/404')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
