
import fetch from '../common/fetch'
import apiUrl from './api-url.js'

export const checkMemberInfo = (params) => fetch({
  url: apiUrl.member.checkMemberInfo,
  method: 'get',
  params: params,
  accredit: true
})
