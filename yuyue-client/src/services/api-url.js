export default {
  // 科室
  department: {
    list: '/hospital/department/open_list',
    canOrderList: '/hospital/department/open_order_list',
    canViewList: '/hospital/department/open_view_list',
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
  },
  report: {
    myReportList: '/report/my_reports',
    reportDetail: '/report/report_detail'
  }
}
