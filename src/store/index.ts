import { createStore } from 'vuex'
import publicState from './modules/publicState'

export default createStore({
  mutations: {
    aaaa() {
      console.log(111)
    }
  },
  modules: {
    publicState
  }
})
