import { defineComponent } from 'vue'
import './index.scss'
import baseFooter from '../baseFooter'

export default defineComponent({
  components: { baseFooter },
  render() {
    return (
      <a-layout-content>
        <router-view />
        <base-footer />
      </a-layout-content>
    )
  }
})
