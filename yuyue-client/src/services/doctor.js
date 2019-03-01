import fetch from '../common/fetch'
import apiUrl from './api-url.js'

export const getDoctors = (params) => fetch({
  url: apiUrl.doctor.list,
  method: 'get',
  params: params,
  accredit: true
})

export const getDoctorDetail = (params) => fetch({
  url: apiUrl.doctor.detail,
  method: 'get',
  params,
  accredit: true
})
