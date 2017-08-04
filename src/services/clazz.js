import fetch from '../utils/base/fetch'

/**
 * 新建类别
 * @param data
 * @returns {*}
 */
export function create(data) {
  return fetch({
    url: '/clazz/create',
    method: 'POST',
    data: data
  })
}
