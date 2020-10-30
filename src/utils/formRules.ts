import { verifyMobile } from '@/utils'

// 自定义严重手机号
export const validatorMobile = (rule: object, value: string) => {
  if (!value) return Promise.reject('请输入手机号')
  else if (!verifyMobile(value)) return Promise.reject('请输入正确手机号')
  return Promise.resolve()
}
