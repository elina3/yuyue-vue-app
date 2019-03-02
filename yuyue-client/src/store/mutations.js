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
  },
  // 记录微信用户的系统信息
  [types.SET_MEMBERINFO] (state, info) {
    state.memberInfo = info
  },
  // 记录微信用户的微信信息
  [types.SET_WECHATINFO] (state, info) {
    state.wechatInfo = info
  },
  // 记录微信用户绑卡登录后的凭据
  [types.SET_ACCESS_TOKEN] (state, info) {
    state.accessToken = info
  }
}

export default mutations
