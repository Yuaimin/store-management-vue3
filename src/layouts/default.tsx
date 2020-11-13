import { defineComponent } from 'vue'
import './default.scss'
import baseHeader from './components/baseHeader'
import baseContent from './components/baseContent'
import baseSider from './components/baseSider'

export default defineComponent({
  components: { baseHeader, baseContent, baseSider },
  render() {
    return (
      <a-layout>
        <base-sider />
        <a-layout>
          <base-header />
          <base-content />
        </a-layout>
      </a-layout>
    )
  }
})
