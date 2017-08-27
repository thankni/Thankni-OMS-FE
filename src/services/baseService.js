import axios from 'axios'

export default class BaseService {
  constructor(config) {
    this.config = {
      responseType: 'json',
      timeout: 5000
    }

    this.requestWhiteList = ['login']
    this.responsetWhiteList = ['login']

    const service = axios.create(this.config)

    // 请求拦截器
    service.interceptors.request.use(request => {
      // do something before request
      return request
    }, error => {
      Promise.reject(error)
    })

    // 响应拦截器
    service.interceptors.response.use(function(response) {
      if (response) {
        return response.data
      } else {
        return Promise.reject()
      }
    }, function(error) {
      // Do something with response error
      return Promise.reject(error)
    })

    this.service = service
  }

}


