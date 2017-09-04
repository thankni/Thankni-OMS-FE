import Mock from 'mockjs'

let Random = Mock.Random

Mock.setup({
  timeout: '200-500'
})

// 登录
Mock.mock(/\/user\/login/, 'post', function(config) {
  return formatResponse({
    username: JSON.parse(config.body).username,
    token: '3Qr3-f3Xf-h6Fj-2wwe-23L2-nnH4',
    permissions: ['/order/list', '/order/detail'],
    role: 'superAdmin'

  })
})
// 新增一个分类
Mock.mock(/\/clazz/, 'post', function() {
  return formatResponse({id: Random.integer(2999, 99999)})
})
// 获取所有分类
Mock.mock(/\/clazz/, 'get', function() {
  return formatResponse([
    {
      id: 23434,
      name: '水果',
      description: '水果分类，如：苹果、香蕉、桃子、梨'
    },
    {
      id: 98347,
      name: '坚果',
      description: '坚果分类，如：瓜子、核桃、开心果'
    }
  ])
})
// 删除分类
Mock.mock(/\/clazz\/[0-9]*/, 'delete', function() {
  return formatResponse([
    {
      id: 23434,
      name: '水果',
      description: '水果分类，如：苹果、香蕉、桃子、梨'
    },
    {
      id: 98347,
      name: '坚果',
      description: '坚果分类，如：瓜子、核桃、开心果'
    }
  ])
})

// 修改分类
Mock.mock(/\/clazz/, 'put', function(config) {
  return formatResponse(null)
})

function formatResponse(data) {
  return {
    status: 200,
    msg: 'success',
    result: data
  }
}


export default Mock
