import BaseService from './baseService'
import serverConfig from '../config/server'

export default class ClazzService extends BaseService {
  constructor(setting) {
    super(Object.assign({
      timeout: 5000,
      baseURL: serverConfig.OMS
    }, setting))
  }

  query(params) {
    return this.service.get('/order/query', { params: params })
  }
  queryAll() {
    return this.service.get('/order/queryAll')
  }
  create(params) {
    return this.service.post('/order/create', params)
  }

}
