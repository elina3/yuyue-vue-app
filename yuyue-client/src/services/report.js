
import fetch from '../common/fetch'
import apiUrl from './api-url.js'

export const getMyReports = (params) => fetch({
  url: apiUrl.report.myReportList,
  method: 'get',
  params: params,
  accredit: true
})

export const getReportDetail = (params) => fetch({
  url: apiUrl.report.reportDetail,
  method: 'get',
  params: params,
  accredit: true
})
