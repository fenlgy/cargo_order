// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import kagou from 'kagou'
// import '../theme/index.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.use(ElementUI)
Vue.use(kagou)

Vue.config.productionTip = false
/* eslint-disable no-new */

const setTitle = (title = 'cargoPm Booking Syetem') => {
  window.document.title = title
}

router.beforeEach(
  (to, from, next) => {
    console.log(to, from)
    iView.LoadingBar.start()
    setTitle(to.meta.title)
    next() // 继续下一个函数，不然会停止不动
  }
)

router.afterEach(route => {
  iView.LoadingBar.finish()
  console.log(route)
})

const myVue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

console.log(myVue)
