import fetch from '../common/fetch'
import apiUrl from './api-url.js'

export const loadWechatInfo = (params) => fetch({
  url: apiUrl.wechat.getWechatInfo,
  method: 'post',
  params: params,
  accredit: true
})
