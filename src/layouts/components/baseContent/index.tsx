import { defineComponent } from 'vue'
import './index.scss'

export default defineComponent({
  render() {
    return (
      <a-layout-content>
        <router-view class="page" />
      </a-layout-content>
    )
  }
})
