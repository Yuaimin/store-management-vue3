import { post } from '@/plugins/http'

interface Signin {
  mobile: string
  password: string
}

export const signin = (data: Signin) => post('/api/signin', data)
