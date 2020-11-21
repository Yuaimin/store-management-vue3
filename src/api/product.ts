import { post } from '@/plugins/http'

interface CreateAttr {
  id?: string
  name: string
  attrs: Array<AttrsItem>
}

interface AttrsItem {
  value: string
}

export const createAttr = (data: CreateAttr) => post('/api/attribute/addAttr', data)
