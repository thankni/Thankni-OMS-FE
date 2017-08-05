import fetch from '../utils/base/fetch'

export function getAllClazzService() {
  return fetch({
    url: '/clazz/getAll',
    method: 'GET'
  })
}
/**
 * 新建类别
 * @param data
 * @returns {*}
 */
export function createService(data) {
  return fetch({
    url: '/clazz/create',
    method: 'POST',
    data: data
  })
}
