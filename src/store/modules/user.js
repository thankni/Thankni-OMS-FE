import * as TYPES from '../mutation-type'
import LoginService from '../../services/userService'

const loginService = new LoginService()
const User = {
  namespaced: true,
  state: {
    account: '',
    status: '',
    code: '',
    token: '',
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
      state.account = loginUser.account
      state.token = loginUser.token
      state.name = loginUser.name
    }
  },
  actions: {
    login({ commit }, loginInfo) {
      return new Promise((resolve, reject) => {
        // if (loginInfo.username && loginInfo.password) {
        //   loginInfo.token = '3f34f34rf3f3f3f3f3rf'
        //   commit(TYPES.USER.LOGIN, loginInfo)
        //   resolve()
        // } else {
        //   reject('没用户名密码还想进去？')
        // }

        loginService.login(loginInfo).then(response => {
          debugger
          commit(TYPES.USER.LOGIN, response)
          resolve()
        }).catch(error => {
          debugger
          reject(error)
        })
      })
    }
  }
}
export default User
