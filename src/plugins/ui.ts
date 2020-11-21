import { App } from 'vue'
import basePageHeader from '@/components/basePageHeader'
import baseTable from '@/components/baseTable'
import { Layout, Button, Menu, Form, Input, PageHeader, Row, Col, Card, Table, Tag, ConfigProvider, Divider, Select } from 'ant-design-vue'

export default {
  install(Vue: App) {
    Vue.component('basePageHeader', basePageHeader).component('baseTable', baseTable)
    Vue.use(ConfigProvider)
      .use(Layout)
      .use(Button)
      .use(Menu)
      .use(Form)
      .use(Input)
      .use(PageHeader)
      .use(Row)
      .use(Col)
      .use(Card)
      .use(Table)
      .use(Tag)
      .use(Divider)
      .use(Select)
  }
}
