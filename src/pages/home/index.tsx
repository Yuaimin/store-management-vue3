import { defineComponent } from 'vue'

export default defineComponent({
  render() {
    return (
      <div>
        {[...Array(100).keys()].map(item => (
          <div>{item}</div>
        ))}
      </div>
    )
  }
})
