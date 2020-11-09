import { defineComponent } from 'vue'
import { mapState, mapMutations } from 'vuex'

export default defineComponent({
  computed: {
    ...mapState('publicState', ['token'])
  },
  created() {
    console.log(this.token)
  },
  methods: {
    ...mapMutations('publicState', ['setData']),
    test() {
      this.setData(+new Date())
      console.log(this.token)
    }
  },
  render() {
    return (
      <div>
        <a-button onClick={this.test}>test</a-button>
        <div>
          {[...Array(100).keys()].map(item => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    )
  }
})
