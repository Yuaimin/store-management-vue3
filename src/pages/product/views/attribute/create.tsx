import { defineComponent } from 'vue'
import './styles/create.scss'
import { formMethods } from '@/mixins'
import { createAttr } from '@/api/product'

export default defineComponent({
  mixins: [formMethods],
  data() {
    return {
      formData: {
        name: '',
        attrs: [{ value: '' }]
      }
    }
  },
  methods: {
    // 添加属性值
    addAttrs() {
      this.formData.attrs.push({ value: '' })
    },
    // 删除属性值
    delAttrs(keys: number) {
      const { attrs } = this.formData
      attrs.splice(keys, 1)
    },
    async submit() {
      const result = await this.validateForm('form')
      if (!result) return
      const { attrs } = this.formData
      const str = JSON.stringify(attrs)
      console.log(str)
      // const attrs: string = JSON.parse()
      const data = await createAttr({ ...this.formData })
      // console.log(data)
    }
  },
  render() {
    const { addAttrs, formData, delAttrs, submit } = this

    const inputSuffix = (keys: number) => (formData.attrs.length > 1 ? <i class="iconfont icon-delete" onClick={() => delAttrs(keys)} /> : null)

    const rules = {
      name: [{ required: true, message: '请输入属性名称', trigger: ['change', 'blur'] }]
    }

    const formItemRules = { required: true, message: '请输入属性值', trigger: ['change', 'blur'] }

    return (
      <div class="page">
        <base-page-header />
        <div class="page-container">
          <a-form ref="form" class="form" model={formData} rules={rules} autocomplete="off" scrollToFirstError labelCol={{ span: 2 }}>
            <a-form-item label="属性名称" name="name">
              <a-input class="w150" placeholder="请输入属性名称" v-model={[formData.name, 'value']} />
            </a-form-item>

            {formData.attrs.map((item, keys) => (
              <a-form-item wrapperCol={{ offset: 2 }} key={keys} label={keys === 0 ? '属性值' : ''} name={['attrs', keys, 'value']} rules={formItemRules}>
                <a-input class="w150" placeholder="请输入属性值" v-model={[item.value, 'value']} v-slots={{ suffix: () => inputSuffix(keys) }} />
              </a-form-item>
            ))}

            <a-form-item wrapperCol={{ offset: 2 }}>
              <a-button class="w150" type="dashed" onClick={addAttrs}>
                添加属性值
              </a-button>
            </a-form-item>

            <a-form-item wrapperCol={{ offset: 2 }} labelCol={{ span: 2 }}>
              <a-button type="primary" onClick={submit}>
                提交
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    )
  }
})
