// 手机号码验证
export const verifyMobile = (value: string) => /^1[0-9][0-9]{9}$/.test(value)
