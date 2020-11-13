import { ActionPayload } from 'vuex'

interface PublicData {
  mobile: string
  name: string
  token: string
}

export default {
  namespaced: true,
  state: {
    token: '',
    name: '',
    mobile: ''
  },
  mutations: {
    setData(state: PublicData, data: PublicData) {
      const { token, name, mobile } = data
      state.token = token
      state.name = name
      state.mobile = mobile
    }
  },
  actions: {
    SETDATA_ACTIONS(state: { commit: (name: string, params: ActionPayload) => void }, payload: ActionPayload) {
      state.commit('setData', payload)
    }
  }
}
