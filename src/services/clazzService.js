import BaseService from './baseService'
import serverConfig from '../config/server'

export default class ClazzService extends BaseService {
  constructor(setting) {
    super(Object.assign({
      timeout: 5000,
      baseURL: serverConfig.OMS
    }, setting))
  }

  queryAll() {
    return this.service.get('/clazz')
  }

  delete(id) {
    return this.service.delete('/clazz/' + id)
  }


}
