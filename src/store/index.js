import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//首先声明一个状态 state

const state = {
  count:0
}

const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement')
}

const mutations = {
  increment(state) {
    state.count = state.count + 5
  },
  decrement(state) {
    state.count = state.count - 3
  }
}
const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
