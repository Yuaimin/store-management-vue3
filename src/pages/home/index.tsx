import { defineComponent } from 'vue'
import './index.scss'

export default defineComponent({
  methods: {},
  render() {
    return (
      <div class="page">
        <base-page-header />
        <div class="page-container">
          <a-row gutter={[16, 16]}>
            <a-col span={6}>
              <a-card hoverable>
                <div class="card">
                  <i class="iconfont icon-user" />
                  <div class="content">
                    <div class="content-title">1111</div>
                    <div class="content-count">3000</div>
                  </div>
                </div>
              </a-card>
            </a-col>
            <a-col span={6}>
              <a-card hoverable>
                <div class="card">
                  <i class="iconfont icon-user" />
                  <span>3000</span>
                </div>
              </a-card>
            </a-col>
            <a-col span={6}>
              <a-card hoverable>
                <div class="card">
                  <i class="iconfont icon-user" />
                  <span>3000</span>
                </div>
              </a-card>
            </a-col>
            <a-col span={6}>
              <a-card hoverable>
                <div class="card">
                  <i class="iconfont icon-user" />
                  <span>3000</span>
                </div>
              </a-card>
            </a-col>
          </a-row>
          <a-row gutter={[16, 16]}>
            <a-col span={24}>
              <a-card hoverable>1</a-card>
            </a-col>
          </a-row>
          <a-row gutter={[16, 16]}>
            <a-col span={12}>
              <a-card hoverable>1</a-card>
            </a-col>
            <a-col span={6}>
              <a-card hoverable>1</a-card>
            </a-col>
            <a-col span={6}>
              <a-card hoverable>1</a-card>
            </a-col>
          </a-row>
          <a-row gutter={[16, 16]}>
            <a-col span={8}>
              <a-card hoverable>1</a-card>
            </a-col>
            <a-col span={8}>
              <a-card hoverable>1</a-card>
            </a-col>
            <a-col span={8}>
              <a-card hoverable>1</a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    )
  }
})
