import BaseService from './base'
import serverConfig from '../config/server'

export default class ImageService extends BaseService {
  constructor(setting) {
    super(Object.assign({
      timeout: 5000,
      baseURL: serverConfig.OMS
    }, setting))
  }

  getUploadToken(putPolicy) {
    return this.service.post('/qiniu/getUploadToken', putPolicy)
  }


}
