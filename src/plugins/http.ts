import axios from 'axios'
import { message } from 'ant-design-vue'
import router from '@/router'
import store from '@/store'

const MessageTotal = message

const baseURL = process.env.NODE_ENV === 'development' ? '' : process.env.VUE_APP_BASEURL

const http = axios.create({ baseURL })

http.interceptors.request.use(
  config => {
    config.headers.Authorization = (store.state as any).publicState.token
    return config
  },
  error => Promise.reject(error)
)

http.interceptors.response.use(
  response => {
    const {
      data: { code, data, message }
    } = response
    if (code === 200) return data
    else if (code === 401) router.push({ name: 'signin' })

    return MessageTotal.error(message) && null
  },
  error => Promise.reject(error) && null
)

export const get = (url: string, params: object = {}) => http.get(url, { params })
export const post = http.post
export const put = http.put
export const del = (url: string, params: object = {}) => http.delete(url, { params })
