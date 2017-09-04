import BaseService from './base'
import serverConfig from '../config/server'

export default class ProductService extends BaseService {
  constructor(setting) {
    super(Object.assign({
      timeout: 5000,
      baseURL: serverConfig.OMS
    }, setting))
  }

  create(clazz) {
    return this.service.post('/product', clazz)
  }
  queryAll() {
    return this.service.get('/product')
  }
  update(clazz) {
    return this.service.put('/product', clazz)
  }
  delete(id) {
    return this.service.delete('/product/' + id)
  }


}
