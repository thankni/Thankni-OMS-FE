import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import clazz from './modules/clazz'

Vue.use(Vuex)
console.log(clazz)
const store = new Vuex.Store({
  modules: {
    user,
    clazz
  },
  strict: true

})
export default store
