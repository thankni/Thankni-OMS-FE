import BaseService from './baseService'
import serverConfig from '../config/server'

export default class UserService extends BaseService {
  constructor(setting) {
    super(Object.assign({
      timeout: 5000,
      baseURL: serverConfig.OMS
    }, setting))
  }

  login(params) {
    return this.service.post('/user/login', params)
  }

}
