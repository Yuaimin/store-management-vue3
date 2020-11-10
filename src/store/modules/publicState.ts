import { ActionPayload, MutationPayload } from 'vuex'

export default {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    setData(state: { token: MutationPayload }, data: MutationPayload) {
      state.token = data
    }
  },
  actions: {
    SETDATA_ACTIONS(state: { commit: (arg0: string, arg1: ActionPayload) => void }, payload: ActionPayload) {
      state.commit('setData', payload)
    }
  }
}
