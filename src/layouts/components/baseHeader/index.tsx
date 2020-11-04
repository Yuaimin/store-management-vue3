import { defineComponent } from 'vue'
import './index.scss'
import { getJSON } from 'js-cookie'

export default defineComponent({
  computed: {
    signinData() {
      const data = getJSON('publicData')
      return data ?? {}
    }
  },
  render() {
    const {
      signinData: { name }
    } = this
    return <a-layout-header>{name}</a-layout-header>
  }
})
