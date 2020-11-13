import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    pageTitle() {
      return this.$route?.meta?.title ?? '标题'
    }
  },
  render() {
    const { pageTitle } = this
    return <a-page-header title={pageTitle} />
  }
})
