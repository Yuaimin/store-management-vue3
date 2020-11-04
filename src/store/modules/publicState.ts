import { ActionPayload, MutationPayload } from 'vuex'
const namespaced = true

const state = {
  token: '',
  name: '1'
  // mobile: ''
}
const mutation = {
  setData(data: MutationPayload) {
    console.log(data)
  }
}

const actions = {
  test({ commit }: any, data: ActionPayload) {
    commit('setData', data)
    console.log(data)
  }
}

export default {
  namespaced,
  state,
  mutation,
  actions
}
