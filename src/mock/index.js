import Mock from 'mockjs'
// 登录
Mock.mock(/\/user\/login/, 'post', function(config) {
  return formatResponse({
    username: JSON.parse(config.body).username,
    token: '3Qr3-f3Xf-h6Fj-2wwe-23L2-nnH4',
    permissions: ['/order/list', '/order/detail'],
    role: 'superAdmin'

  })
})
// 获取所有分类
Mock.mock(/\/order\/create/, 'post', function() {
  return formatResponse(Random.natural(6000, 1000000))
})// 获取所有分类
Mock.mock(/\/order\/queryAll/, 'get', function() {
  return formatResponse({
    username: JSON.parse(config.body).username,
    token: '3Qr3-f3Xf-h6Fj-2wwe-23L2-nnH4',
    permissions: ['/order/list', '/order/detail'],
    role: 'superAdmin'

  })
})

function formatResponse(data) {
  return {
    status: 200,
    msg: 'success',
    result: data
  }
}


export default Mock
