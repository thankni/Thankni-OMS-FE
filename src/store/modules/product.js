import * as TYPES from '../mutation-type'
const Product = {
  namespaced: true,
  state: {
    showCreateDialog: false
  },
  getters: {
    getShowCreateDialog: (state, getters, rootState, rootGetters) => state.showCreateDialog
  },
  mutations: {
    [TYPES.CLAZZ.SET_ALL_CLAZZ](state, allClazz) {
      state.clazzList = allClazz
    },
    [TYPES.CLAZZ.HIDE_CREATE_DIALOG](state) {
      state.showCreateDialog && (state.showCreateDialog = false)
    },
    [TYPES.CLAZZ.SHOW_CREATE_DIALOG](state) {
      !state.showCreateDialog && (state.showCreateDialog = true)
    },
    [TYPES.CLAZZ.CREATE](name) {

    }

  },
  actions: {
    showCreateDialog({ dispatch, commit, getters, rootGetters }) {
      commit(TYPES.CLAZZ.SHOW_CREATE_DIALOG)
    },
    hideCreateDialog({ dispatch, commit, getters, rootGetters }) {
      commit(TYPES.CLAZZ.HIDE_CREATE_DIALOG)
    }
  }
}

export default Product
