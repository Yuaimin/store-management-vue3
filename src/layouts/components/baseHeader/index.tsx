import { defineComponent } from 'vue'
import './index.scss'
import { mapState } from 'vuex'

export default defineComponent({
  computed: {
    ...mapState('publicState', ['name'])
  },
  render() {
    const { name } = this
    return <a-layout-header>{name}</a-layout-header>
  }
})
