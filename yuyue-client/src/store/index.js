import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import createLogger from 'vuex/dist/logger'
// Vuex的应用场景： 1,多组件的状态和数据共享 2，路由见的复杂数据传递
Vue.use(Vuex)

// 不允许组件修改state的值，只能调用mutation来进行commit
// 如果是npm run build是production环境，如果是npm run dev 则为true
const debug = process.env.NODE_EVN !== 'production'

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
