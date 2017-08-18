import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login'
import Index from '../views/index'
import OrderIndex from '../views/order'
import OrderList from '../views/order/list'
import OrderDetail from '../views/order/detail'

import ProductIndex from '../views/product'
import ProductList from '../views/product/list'
import ProductDetail from '../views/product/detail'
import ProductCreate from '../views/product/create'

import ClassList from '../views/class/list'
import Crm from 'views/crm'

import appInfo from '../config/index'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login', component: Login, name: '登陆'
    },
    {
      path: '/', redirect: 'order/list', name: '订单列表'
    },
    {
      path: '/',
      component: Index,
      children: [
        {
          path: 'order',
          component: OrderIndex,
          children: [
            { path: 'list', component: OrderList },
            { path: 'detail', component: OrderDetail }

          ]
        },
        {
          path: 'product',
          component: ProductIndex,
          children: [
            { path: 'class', component: ClassList },
            { path: 'list', component: ProductList },
            { path: 'detail', component: ProductDetail },
            { path: 'create', component: ProductCreate }

          ]
        },
        {
          path: 'class',
          component: ClassList
        },
        {
          path: 'crm',
          component: Crm
        }


      ]
    }
  ]
})

const routeWhiteList = ['/login']
// 导航钩子
router.beforeEach((to, from, next) => {
  if (routeWhiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    // 登录验证
    const session = Vue.cookie.get(appInfo.session) && JSON.parse(Vue.cookie.get(appInfo.session))
    if (session && session.token && session.username) {
      store.dispatch('user/setSession', session)
      next()
    } else {
      next('/login')
    }
  }
})

export default router
