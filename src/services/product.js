import BaseService from './base'
import serverConfig from '../config/server'

export default class ProductService extends BaseService {
  constructor(setting) {
    super(Object.assign({
      timeout: 5000,
      baseURL: serverConfig.OMS
    }, setting))
  }

  create(product) {
    return this.service.post('/product', product)
  }
  queryAll() {
    return this.service.get('/product')
  }
  update(product) {
    return this.service.put('/product', product)
  }
  delete(id) {
    return this.service.delete('/product/' + id)
  }


}
