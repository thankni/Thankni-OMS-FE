import * as TYPES from '../mutation-type'
import ClazzService from '../../services/clazzService'

const clazzService = new ClazzService()
const Clazz = {
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
    queryAll({ commit }) {
      return new Promise((resolve, reject) => {
        clazzService.queryAll().then(response => {
          resolve(response.result)
        }).catch(error => {
          debugger
          reject(error)
        })
      })
    },
    showCreateDialog({ dispatch, commit, getters, rootGetters }) {
      commit(TYPES.CLAZZ.SHOW_CREATE_DIALOG)
    },
    hideCreateDialog({ dispatch, commit, getters, rootGetters }) {
      commit(TYPES.CLAZZ.HIDE_CREATE_DIALOG)
    },
    create({ commit }, name) {
      return new Promise((resolve, reject) => {
        clazzService.create().then(response => {
          commit(TYPES.CLAZZ.CREATE, name)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    delete(id) {
      return new Promise((resolve, reject) => {
        clazzService.delete(id).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default Clazz
