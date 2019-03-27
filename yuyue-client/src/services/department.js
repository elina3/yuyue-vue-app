import fetch from '../common/fetch'
import apiUrl from './api-url.js'

export const getDepartments = (params) => fetch({
  url: apiUrl.department.list,
  method: 'get',
  params: params,
  accredit: true
})

export const getCanViewDepartments = (params) => fetch({
  url: apiUrl.department.canViewList,
  method: 'get',
  params: params,
  accredit: true
})

export const getCanOrderDepartments = (params) => fetch({
  url: apiUrl.department.canOrderList,
  method: 'get',
  params: params,
  accredit: true
})

export const getDepartmentDetail = (params) => fetch({
  url: apiUrl.department.detail,
  method: 'get',
  params,
  accredit: true
})
