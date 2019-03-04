export default {
  // 科室
  department: {
    list: '/hospital/department/open_list',
    detail: '/hospital/department/detail'
  },
  doctor: {
    list: '/user/doctor/list',
    detail: 'user/detail'
  },
  appointment: {
    doctorSchedule: '/app/doctor/schedules',
    preview: '/app/doctor/preview_appointment_info',
    create: '/app/doctor/create_appointment',
    list: '/app/doctor/appointment_list',
    detail: '/app/doctor/appointment_detail',
    cancel: '/app/doctor/cancel_appointment'
  },
  wechat: {
    getWechatInfo: '/wechat/wechat_info'
  },
  member: {
    checkMemberInfo: '/member/check_by_openid',
    bindCard: '/member/bind_card',
    unbindCard: '/member/unbind_card'
  }
}
