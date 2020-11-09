import { MutationPayload } from 'vuex'

const namespaced = true

const state = {
  token: ''
}
const mutations = {
  setData(state: any, data: MutationPayload) {
    state.token = data
  }
}

export default {
  namespaced,
  state,
  mutations
}
