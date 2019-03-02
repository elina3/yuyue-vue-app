<template>
  <div class="appointment-detail-page">
    <div class="detail-box">
        <div class="detail-item">
            <label>预约单状态</label>
            <span>{{appointmentDetail.status}}</span>
        </div>
    </div>
    <div class="detail-box">
        <div class="detail-item">
            <label>就诊科室</label>
            <span>{{appointmentDetail.department}}</span>
        </div>
        <div class="detail-item">
            <label>就诊医生</label>
            <span>{{appointmentDetail.doctor}}</span>
        </div>
        <div class="detail-item">
            <label>门诊类型</label>
            <span>{{appointmentDetail.outpatientType}}</span>
        </div>
        <div class="detail-item">
            <label>挂号费用</label>
            <span>{{appointmentDetail.price}}</span>
        </div>
        <div class="detail-item">
            <label>就诊日期</label>
            <span>{{appointmentDetail.date}}</span>
        </div>
        <div class="detail-item">
            <label>就诊时间</label>
            <span>{{appointmentDetail.timeRange}}</span>
        </div>
    </div>
    <div class="detail-box">
        <div class="detail-item">
            <label>患者姓名</label>
            <span>{{appointmentDetail.name}}</span>
        </div>
        <div class="detail-item">
            <label>身份证号</label>
            <span>{{appointmentDetail.IDCard}}</span>
        </div>
        <div class="detail-item">
            <label>手机号码</label>
            <span>{{appointmentDetail.mobile}}</span>
        </div>
        <div class="detail-item">
            <label>就诊卡类型</label>
            <span>{{appointmentDetail.cardType}}</span>
        </div>
        <div class="detail-item">
            <label>就诊卡号</label>
            <span>{{appointmentDetail.cardNumber}}</span>
        </div>
    </div>
    <div class="detail-box">
        <div class="detail-item">
            <label>预约单号</label>
            <span>{{appointmentDetail.orderNumber}}</span>
        </div>
    </div>
  </div>
</template>
<script>

import config from '@/common/config'
import { getAppointmentDetail } from '@/services/appointment'
import { Toast } from 'we-vue'

export default {
  name: 'AppointmentDetail',
  data () {
    return {
      thumb: '/client/static/images/department/default.png',
      appointmentDetail: {
        status: '',
        department: '',
        doctor: '',
        outpatientType: '',
        price: '',
        date: '',
        timeRange: '',
        paymentMethod: '',
        name: '',
        IDCard: '',
        mobile: '',
        cardType: '',
        cardNumber: '',
        orderNumber: ''
      }
    }
  },
  mounted () {
    this.loadAppointmentDetail()
  },
  methods: {
    jump () {
      this.$router.push({ path: '/appointment/select-time/1' })
    },
    loadAppointmentDetail () {
      getAppointmentDetail({appointment_id: this.$route.params.id}).then(res => {
        if (res.err) {
          return Toast(res.err)
        }
        console.log(res)
        if (res.appointment) {
          console.log('as')
          res.appointment.start_time = new Date(res.appointment.start_time)
          res.appointment.end_time = new Date(res.appointment.end_time)
          this.appointmentDetail = {
            status: config.appointment_status[res.appointment.status],
            outpatientType: config.outpatient_type[res.appointment.doctor.outpatient_type],
            price: res.appointment.price ? (res.appointment.price / 100) + '元' : '未设置',
            doctor: res.appointment.doctor.nickname,
            department: res.appointment.department.name,
            date: res.appointment.start_time.Format('yyy-MM-dd'),
            timeRange: res.appointment.start_time.Format('hh:mm') + '~' + res.appointment.end_time.Format('hh:mm'),
            IDCard: res.appointment.IDCard,
            cardType: res.appointment.card_type || '未绑定',
            cardNumber: res.appointment.card_number || '未绑定',
            orderNumber: res.appointment.order_number,
            mobile: res.appointment.member.mobile,
            name: res.appointment.member.nickname || res.appointment.IDCard,
            paymentMethod: config.payment_method[res.appointment.payment_method] || '未知'
          }
          console.log('as')
        }
      }, err => {
        console.error(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../assets/css/common';
</style>
<style lang="scss" scoped>
@import '../../../assets/css/define';
.appointment-detail-page{
    background: #fff;
    overflow: hidden;
    padding-bottom: 2rem;
    .detail-box{
        overflow: hidden;
        padding: 1rem;
        width: 100%;
        border-bottom: 1px solid $line-color;
        .detail-item{
            overflow: hidden;
            label, span{
                display: inline-block;
                float: left;
                text-align: left;
            }
            label{
                width: 30%;
            }
            span{
                width: 70%;
                color: $color-primary-blue;
            }
        }
    }
}
</style>
