import BaseService from './base'
import serverConfig from '../config/server'

export default class ClazzService extends BaseService {
  constructor(setting) {
    super(Object.assign({
      timeout: 5000,
      baseURL: serverConfig.OMS
    }, setting))
  }

  create(clazz) {
    return this.service.post('/clazz', clazz)
  }
  queryAll() {
    return this.service.get('/clazz')
  }
  update(clazz) {
    return this.service.put('/clazz', clazz)
  }
  delete(id) {
    return this.service.delete('/clazz/' + id)
  }


}
