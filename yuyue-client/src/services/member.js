
import fetch from '../common/fetch'
import apiUrl from './api-url.js'

export const checkMemberInfo = (params) => fetch({
  url: apiUrl.member.checkMemberInfo,
  method: 'get',
  params: params,
  accredit: true
})

export const bindCard = (params) => fetch({
  url: apiUrl.member.bindCard,
  method: 'post',
  data: params,
  accredit: false
})
