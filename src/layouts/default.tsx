import { defineComponent } from 'vue'
import './default.scss'
import baseHeader from './components/baseHeader'
import baseContent from './components/baseContent'
import baseFooter from './components/baseFooter'
import baseSider from './components/baseSider'

export default defineComponent({
  components: { baseHeader, baseContent, baseFooter, baseSider },
  render() {
    return (
      <a-layout>
        <base-sider />
        <a-layout>
          <base-header />
          <base-content />
          <base-footer />
        </a-layout>
      </a-layout>
    )
  }
})
