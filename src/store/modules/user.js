import * as TYPES from '../mutation-type'
// import LoginService from '../../services/userService'
//
// const loginService = new LoginService()
const User = {
  namespaced: true,
  state: {
    account: '',
    status: '',
    code: '',
    token: null,
    name: '',
    avatar: '',
    introduction: '',
    roles: []
  },
  getters: {
    account: state => state.account,
    status: state => state.status,
    code: state => state.code,
    token: state => state.token,
    name: state => state.name,
    avatar: state => state.avatar,
    introduction: state => state.introduction,
    roles: state => state.roles
  },
  mutations: {
    [TYPES.USER.LOGIN](state, loginUser) {
      state.token = loginUser.token
      state.name = loginUser.username
    },
    [TYPES.USER.LOGOUT](state) {
      state = {
        account: '',
        status: '',
        code: '',
        token: null,
        name: '',
        avatar: '',
        introduction: '',
        roles: []
      }
    },
    [TYPES.USER.SET_SESSION](state, session) {
      state.name = session.username
      state.token = session.token
    }
  },
  actions: {
    login({ commit }, loginInfo) {
      return new Promise((resolve, reject) => {
        if (loginInfo.username && loginInfo.password) {
          loginInfo.token = '3f34f34rf3f3f3f3f3rf'
          commit(TYPES.USER.LOGIN, loginInfo)
          debugger
          resolve(loginInfo)
        } else {
          reject('没用户名密码还想进去？')
        }

        // loginService.login(loginInfo).then(response => {
        //   debugger
        //   commit(TYPES.USER.LOGIN, response)
        //   resolve()
        // }).catch(error => {
        //   debugger
        //   reject(error)
        // })
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit(TYPES.USER.LOGOUT)
        resolve()
      })
    },
    getSession({ commit, getters }) {
      return Promise.resolve({
        account: getters.account,
        status: getters.status,
        code: getters.code,
        token: getters.token,
        name: getters.name,
        avatar: getters.avatar,
        introduction: getters.introduction,
        roles: getters.roles
      })
    },
    setSession({ commit }, session) {
      commit(TYPES.USER.SET_SESSION, session)
    }
  }
}
export default User
