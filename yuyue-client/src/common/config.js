const config = {
  outpatient_type: {
    'expert': '专家门诊',
    'normal': '普通门诊'
  },
  appointment_status: {
    'booking': '预约中',
    'booked': '已预约',
    'picked_up': '已取号',
    'over_number': '已过号',
    'canceled': '已取消'
  },
  card_type: {
    'health_care': '医保卡',
    'medical': '诊疗卡',
    'none': '无'
  },
  sex: {
    'male': '男',
    'female': '女',
    'unknown': '未知'
  },
  imageUrl: '/file/image?key=',
  payment_method: {
    'wechat': '微信支付',
    'offline': '到院支付'
  }
}

export default config
