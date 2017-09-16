import Mock from "mockjs";

let Random = Mock.Random

Mock.setup({
  timeout: '200-500'
})

// 登录
Mock.mock(/\/user\/login/, 'post', function (config) {
  return formatResponse({
    username: JSON.parse(config.body).username,
    token: '3Qr3-f3Xf-h6Fj-2wwe-23L2-nnH4',
    permissions: ['/order/list', '/order/detail'],
    role: 'superAdmin'

  })
})
// 新增一个分类
Mock.mock(/\/clazz/, 'post', function () {
  return formatResponse({id: Random.integer(2999, 99999)})
})
// 获取所有分类
Mock.mock(/\/clazz/, 'get', function () {
  return formatResponse([
    {
      id: 23434,
      name: '水果',
      description: '水果分类,如：苹果、香蕉、桃子、梨'
    },
    {
      id: 98347,
      name: '坚果',
      description: '坚果分类,如：瓜子、核桃、开心果'
    }
  ])
})
// 删除分类
Mock.mock(/\/clazz\/[0-9]*/, 'delete', function () {
  return formatResponse(null)
})

// 修改分类
Mock.mock(/\/clazz/, 'put', function (config) {
  return formatResponse(null)
})


// 新增商品
Mock.mock(/\/product/, 'post', function () {
  return formatResponse({id: Random.integer(2999, 99999)})
})
// 删除商品
Mock.mock(/\/product\/[0-9]*/, 'delete', function () {
  return formatResponse(null)
})

// 修改分类
Mock.mock(/\/product/, 'put', function (config) {
  return formatResponse(null)
})
Mock.mock(/\/product/, 'get', function () {
  return formatResponse([{
    name: "阿克苏苹果",
    description: "阿克苏苹果是苹果的一种,具有果面光滑细腻、色泽光亮、果肉细腻、果核透明等特点。果香浓郁、甘甜味厚、汁多无渣,冰糖心含量高达70%以上",
    filed: "新疆",
    clazz: {
      id:23445,
      name:'水果'
    },
    image: [{id: 2234, type: 1, url: "image.qiniu.com/23rd334f3434f.png", order: 3}, {
      id: 2234,
      type: 1,
      url: "image.qiniu.com/23rd334f3434f.png",
      order: 3
    }],
    discount: 1,
    costPrice: 3.56,
    label: "冰糖心,高维C",
    productionPlan: [{
      name: "1斤装",
      price: 2.69,
      marketPrice: 3.40,
      salesVolume: 323,
      likes: 275,
      unlikes: 11
    }, {name: "2斤装", price: 4.99, marketPrice: 6.59, salesVolume: 432, likes: 233, unlikes: 21}]
  }, {
    name: "红心猕猴桃",
    description: "红心猕猴桃,是一种可食用与药用为一体的水果,每百克鲜果肉含维生素C100-420毫克,比柑橘高5-10倍,比柠檬高11-13倍,比苹果高20-80倍。",
    filed: "陕西",
    clazz: {
      id:23445,
      name:'水果'
    },
    image: [{id: 2234, type: 1, url: "image.qiniu.com/23rd334f3434f.png", order: 3}, {
      id: 2234,
      type: 1,
      url: "image.qiniu.com/23rd334f3434f.png",
      order: 3
    }],
    discount: 1,
    costPrice: 7.8,
    label: "人间仙果,维C之王,果中之王",
    productionPlan: [{
      name: "1斤装",
      price: 3.68,
      marketPrice: 4.50,
      salesVolume: 388,
      likes: 349,
      unlikes: 9
    }, {name: "2斤装", price: 6.28, marketPrice: 9.00, salesVolume: 388, likes: 349, unlikes: 9}]
  }])
})

function formatResponse(data) {
  return {
    status: 200,
    msg: 'success',
    result: data
  }
}
export default Mock
