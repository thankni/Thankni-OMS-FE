import * as TYPES from '../mutation-type'
import getAllClazzService from '../../services/clazz'

const Clazz = {
  namespaced: true,
  state: {
    showCreateDialog: false
  },
  getters: {
    getShowCreateDialog: (state, getters, rootState, rootGetters) => state.showCreateDialog
  },
  mutations: {
    [TYPES.CLAZZ.GET_ALL_CLAZZ](state) {

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
    getAllClazz({ commit }) {
      commit(TYPES.CLAZZ.GET_ALL_CLAZZ)
    },
    showCreateDialog({ dispatch, commit, getters, rootGetters }) {
      commit(TYPES.CLAZZ.SHOW_CREATE_DIALOG)
    },
    hideCreateDialog({ dispatch, commit, getters, rootGetters }) {
      commit(TYPES.CLAZZ.HIDE_CREATE_DIALOG)
    },
    create({ commit }, name) {
      return new Promise((resolve, reject) => {
        getAllClazzService().then(response => {
          commit(TYPES.CLAZZ.CREATE, name)
        }).catch()
      })
    }
  }
}

export default Clazz
