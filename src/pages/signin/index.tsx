import { defineComponent } from 'vue'
import './index.scss'
import { formMethods } from '@/mixins'
import { validatorMobile } from '@/utils/formRules'
import { signin } from '@/api/signin'
import { mapState, mapActions, mapMutations } from 'vuex'

interface StoreData {
  token: string
  name: string
  mobile: string
}

export default defineComponent({
  mixins: [formMethods],
  data() {
    return {
      formData: {
        mobile: '',
        password: ''
      },
      rules: {
        mobile: [
          {
            required: true,
            validator: (rule: object, value: string) => validatorMobile(rule, value),
            trigger: 'blur'
          }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loading: false
    }
  },
  computed: {
    ...mapState(['publicState'])
  },
  methods: {
    ...mapActions('publicState', ['test']),
    ...mapMutations({
      setData: 'publicState/setData'
    }),
    async signin() {
      this.test()
      this.setData()
      // const reslut = await this.validateForm('form')
      // if (!reslut) return
      // this.loading = true
      // const data = await signin(this.formData)
      // this.loading = false
      // this.setData({ ...this.formData })
      console.log(this.publicState)
    }
  },
  render() {
    const { signin, formData, rules, loading } = this

    return (
      <div class="signin">
        <div class="signin-content">
          <div class="signin-content-title">欢迎回来</div>
          <div class="signin-content-container">
            <a-form model={formData} rules={rules} ref="form">
              <a-form-item name="mobile">
                <a-input placeholder="请输入手机号" v-model={[formData.mobile, 'value']} />
              </a-form-item>
              <a-form-item name="password">
                <a-input-password placeholder="请输入密码" v-model={[formData.password, 'value']} />
              </a-form-item>
              <a-form-item>
                <a-button block type="primary" onClick={signin} loading={loading}>
                  登录
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    )
  }
})
