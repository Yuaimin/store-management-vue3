import { defineComponent } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
// import enUS from 'ant-design-vue/es/locale/en_US'

export default defineComponent({
  data() {
    return {
      locale: zhCN
    }
  },
  render() {
    const { locale } = this
    return (
      <a-config-provider locale={locale}>
        <router-view />
      </a-config-provider>
    )
  }
})
