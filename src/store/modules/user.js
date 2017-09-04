import * as TYPES from '../mutation-type'
import UserService from '../../services/user'
const userService = new UserService()
const User = {
  namespaced: true,
  state: {
    account: '',
    status: '',
    code: '',
    token: null,
    username: '',
    avatar: '',
    introduction: '',
    roles: '',
    permissions: []
  },
  getters: {
    account: state => state.account,
    token: state => state.token,
    username: state => state.username,
    avatar: state => state.avatar,
    roles: state => state.roles,
    permissions: state => state.permissions,

    session: state => {
      return {
        account: state.account,
        token: state.token,
        username: state.username,
        avatar: state.avatar,
        roles: state.roles,
        permissions: state.permissions
      }
    }
  },
  mutations: {
    [TYPES.USER.LOGIN](state, loginUser) {
      state.token = loginUser.token
      state.username = loginUser.username
      state.token = loginUser.token
      state.permissions = loginUser.permissions
      state.role = loginUser.role
    },
    [TYPES.USER.LOGOUT](state) {
      state = {
        account: '',
        status: '',
        code: '',
        token: null,
        username: '',
        avatar: '',
        introduction: '',
        roles: []
      }
    },
    [TYPES.USER.SET_SESSION](state, session) {
      state.username = session.username
      state.token = session.token
    }
  },
  actions: {
    login({ commit }, loginInfo) {
      return new Promise((resolve, reject) => {
        // if (loginInfo.username && loginInfo.password) {
        //   loginInfo.token = '3f34f34rf3f3f3f3f3rf'
        //   commit(TYPES.USER.LOGIN, loginInfo)
        //   resolve(loginInfo)
        // } else {
        //   reject('没用户名密码还想进去？')
        // }

        userService.login(loginInfo).then(response => {
          commit(TYPES.USER.LOGIN, response.result)
          resolve(response.result)
        }).catch(error => {
          reject(error)
        })
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        resolve()
        // userService.logout().then(response => {
        //   commit(TYPES.USER.LOGOUT)
        //   resolve()
        // })
      })
    },
    getSession({ commit, getters }) {
      return Promise.resolve({
        account: getters.account,
        token: getters.token,
        username: getters.username,
        avatar: getters.avatar,
        roles: getters.roles
      })
    },
    setSession({ commit }, session) {
      commit(TYPES.USER.SET_SESSION, session)
    }
  }
}
export default User
