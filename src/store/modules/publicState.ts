const namespaced = true

const state = {
  token: '',
  name: '',
  mobile: ''
}
const mutation = {
  setData() {
    console.log(111)
  }
}

const actions = {
  test() {
    console.log(111)
  }
}

export default {
  namespaced,
  state,
  mutation,
  actions
}
