import fetch from '../utils/base/fetch'

export function loginService(loginInfo) {
  return fetch({
    url: '/user/login',
    method: 'POST',
    data: loginInfo
  })
}
