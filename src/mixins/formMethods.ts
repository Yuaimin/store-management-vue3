import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    validateForm(form: string) {
      return new Promise(reslove =>
        (this.$refs[form] as HTMLFormElement)
          .validate()
          .then(() => reslove(true))
          .catch(() => reslove(false))
      )
    }
  }
})
