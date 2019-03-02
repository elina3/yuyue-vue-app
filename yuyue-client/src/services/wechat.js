import fetch from '../common/fetch'
import apiUrl from './api-url.js'

export const getWechatInfo = (params) => fetch({
  url: apiUrl.wechat.getWechatInfo,
  method: 'post',
  params: params,
  accredit: true
})
