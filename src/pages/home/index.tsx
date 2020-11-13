import { defineComponent } from 'vue'

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
                <i class="iconfont icon-moneycollect" />
                <span>3000</span>
              </a-card>
            </a-col>
            <a-col span={6}>
              <a-card hoverable>2</a-card>
            </a-col>
            <a-col span={6}>
              <a-card hoverable>3</a-card>
            </a-col>
            <a-col span={6}>
              <a-card hoverable>4</a-card>
            </a-col>
            <a-col span={24}>
              <a-card hoverable>1</a-card>
            </a-col>
            <a-col span={12}>
              <a-card hoverable>1</a-card>
            </a-col>
            <a-col span={6}>
              <a-card hoverable>1</a-card>
            </a-col>
            <a-col span={6}>
              <a-card hoverable>1</a-card>
            </a-col>
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
