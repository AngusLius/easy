// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Routers from './router'
import store from './store'
import iView from 'iview'
import util from './utils/util'
import './custom-theme/index.less'
import './scss/global.scss'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(iView)
Vue.prototype.$util = util

Vue.prototype.$Message.config({
  top: 100,
  duration: 5
})

// 路由配置
const RouterConfig = {
  routes: Routers
}
const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(() => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
