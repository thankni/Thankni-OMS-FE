import * as TYPES from '../mutation-type'
import { createService, getAllClazzService } from '../../services/clazz'

const Clazz = {
  namespaced: true,
  state: {
    clazzList: [],
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
    getAllClazz({ commit }) {
      return new Promise((resolve, reject) => {
        getAllClazzService().then(response => {
          commit(TYPES.CLAZZ.SET_ALL_CLAZZ, response.data)
          resolve(response.data)
        }).catch(error => {
          reject(error)
        })
        commit(TYPES.CLAZZ.GET_ALL_CLAZZ)
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
        createService().then(response => {
          commit(TYPES.CLAZZ.CREATE, name)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default Clazz
