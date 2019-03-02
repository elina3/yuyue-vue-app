import fetch from '../common/fetch'
import apiUrl from './api-url.js'

export const getDoctorSchedules = (params) => fetch({
  url: apiUrl.appointment.doctorSchedule,
  method: 'get',
  params: params,
  accredit: true
})

export const previewAppointment = (params) => fetch({
  url: apiUrl.appointment.preview,
  method: 'get',
  params: params,
  accredit: true
})

export const createAppointment = (params) => fetch({
  url: apiUrl.appointment.create,
  method: 'post',
  params: params,
  accredit: true
})

export const getMyAppointments = (params) => fetch({
  url: apiUrl.appointment.list,
  method: 'get',
  params: params,
  accredit: true
})

export const getAppointmentDetail = (params) => fetch({
  url: apiUrl.appointment.detail,
  method: 'get',
  params: params,
  accredit: true
})
