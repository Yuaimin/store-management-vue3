import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    pageTitle() {
      return this.$route?.meta?.title ?? '标题'
    }
  },
  render() {
    const { pageTitle, $slots } = this
    return (
      <a-page-header title={pageTitle} extra={$slots.extra && $slots.extra()}>
        {$slots.default && $slots.default()}
      </a-page-header>
    )
  }
})
