// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from 'router'
import store from './store'
import 'assets/sass/global.scss'
import 'animate.css'
import VueCookie from 'cookie-in-vue'
import appInfo from './config/index.js'

Vue.use(ElementUI)
Vue.use(VueCookie)
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const routeWhiteList = ['/login']
// 导航钩子
router.beforeEach((to, from, next) => {
  debugger
  if (routeWhiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    // 登录验证
    const session = Vue.cookie.get(appInfo.session) && JSON.parse(Vue.cookie.get(appInfo.session))
    if (session && session.token && session.username) {
      next()
    } else {
      next('/login')
    }
  }
})

