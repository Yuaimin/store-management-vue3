import { RouteRecordRaw, RouteMeta } from 'vue-router'

// 手机号码验证
export const verifyMobile = (value: string) => /^1[0-9][0-9]{9}$/.test(value)

// 过滤路由
export const filterRoutes = (routes: Array<RouteRecordRaw>): Array<RouteRecordRaw> =>
  routes.map(item => {
    if (item.children?.length) {
      return { ...item, children: [...filterRoutes(item.children)] }
    }
    return { ...item, meta: { ...item.meta, hidden: (item.meta as RouteMeta).hidden ?? false } }
  })
