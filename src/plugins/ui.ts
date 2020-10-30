import { App } from 'vue'
import { Layout, Button, Menu, Form, Input } from 'ant-design-vue'

export default {
  install(Vue: App) {
    Vue.use(Layout)
    Vue.use(Button)
    Vue.use(Menu)
    Vue.use(Form)
    Vue.use(Input)
  }
}
