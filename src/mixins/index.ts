import { defineComponent } from 'vue'

export const formMethods = defineComponent({
  methods: {
    // 验证表单
    validateForm(form: string) {
      return new Promise(reslove =>
        (this.$refs[form] as HTMLFormElement)
          .validate()
          .then(() => reslove(true))
          .catch(() => reslove(false))
      )
    },
    // 重置表单
    resetFieldsForm(form: string) {
      ;(this.$refs[form] as HTMLFormElement).resetFields()
    }
  }
})
