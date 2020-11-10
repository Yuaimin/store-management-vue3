import { defineComponent } from 'vue'
import { mapState, mapActions } from 'vuex'

export default defineComponent({
  computed: {
    ...mapState('publicState', ['token'])
  },
  created() {
    console.log(this.token)
  },
  methods: {
    ...mapActions('publicState', ['SETDATA_ACTIONS']),
    test() {
      this.SETDATA_ACTIONS('4')
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
