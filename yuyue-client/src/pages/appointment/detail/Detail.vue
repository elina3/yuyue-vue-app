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

export default {
  name: 'AppointmentDetail',
  data () {
    return {
      msg: '',
      thumb: '/static/images/department/default.png',
      appointmentDetail: {
        status: '已预约',
        department: '心外科',
        doctor: '李医生',
        outpatientType: '专家门诊',
        price: '30元',
        date: '2019-2-19',
        timeRange: '09:00-10:30',
        paymentMethod: '微信支付',
        name: '妞儿',
        IDCard: '110987197806152352',
        mobile: '13287769075',
        cardType: '医保卡',
        cardNumber: '3u5p9420573648242',
        orderNumber: '22380798'
      }
    }
  },
  methods: {
    jump () {
      this.$router.push({ path: '/appointment/select-time/1' })
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
