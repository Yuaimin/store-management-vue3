import { defineComponent } from 'vue'
import './index.scss'

export default defineComponent({
  render() {
    const title = () => (
      <div>
        <i class="iconfont icon-cart"></i>
        <span>1123</span>
      </div>
    )
    return (
      <a-layout-sider>
        <div class="logo">logo</div>
        <a-menu theme="dark" mode="inline">
          <a-menu-item>
            <i class="iconfont icon-cart"></i>
            <span>1123</span>
          </a-menu-item>
          <a-sub-menu key="sub1" v-slots={{ title }}>
            <a-menu-item key="5">Option 5</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
    )
  }
})
