declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'ant-design-vue/es/locale/zh_CN'

declare module 'ant-design-vue/es/locale/en_US'
