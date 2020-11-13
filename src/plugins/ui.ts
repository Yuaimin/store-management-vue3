import { App } from 'vue'
import basePageHeader from '@/components/basePageHeader'
import { Layout, Button, Menu, Form, Input, PageHeader, Row, Col, Card } from 'ant-design-vue'

export default {
  install(Vue: App) {
    Vue.component('basePageHeader', basePageHeader)
    Vue.use(Layout)
      .use(Button)
      .use(Menu)
      .use(Form)
      .use(Input)
      .use(PageHeader)
      .use(Row)
      .use(Col)
      .use(Card)
  }
}
