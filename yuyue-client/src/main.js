// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import '../static/js/global'
import App from './App'

import router from './router'

Vue.use(WeVue)
/* 实例化参数 */
Vue.use(require('vue-wechat-title'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
