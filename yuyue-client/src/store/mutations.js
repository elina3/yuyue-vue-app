import * as types from './mutation-types'

const mutations = {
  // 测试信息 存入vuex,第一个参数为state，第二个参数data为传入的data
  [types.SET_TOKEN] (state, data) {
    state.token = data
  },
  // 记录用户信息
  [types.RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.loginStatus = true
  }
}

export default mutations
