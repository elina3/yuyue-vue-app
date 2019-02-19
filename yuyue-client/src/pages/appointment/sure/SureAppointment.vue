<template>
  <div class="sure-appointment-page">
    <span class="page-title">就诊卡:</span>
    <wv-panel class="my-card">
      <wv-cell title="王子争" is-link to="/me/medical_card">
        <img :src="cardImage" alt="" slot="icon" class="cell-icon">
      </wv-cell>
    </wv-panel>
    <span class="page-title">预约详情:</span>
    <wv-group class="appointment-info">
      <wv-input label="科室" placeholder="请输入内容" :readonly="true" v-model="appointmentInfo.department"></wv-input>
      <wv-input label="医生" placeholder="请输入内容" :readonly="true" v-model="appointmentInfo.doctor"></wv-input>
      <wv-input label="号类" placeholder="请输入内容" :readonly="true" v-model="appointmentInfo.outpatientType"></wv-input>
      <wv-input label="就诊日期" placeholder="请输入内容" :readonly="true" v-model="appointmentInfo.date"></wv-input>
      <wv-input label="就诊时段" placeholder="请输入内容" :readonly="true" v-model="appointmentInfo.timeRange"></wv-input>
      <wv-input label="挂号费用" placeholder="请输入内容" :readonly="true" v-model="appointmentInfo.price"></wv-input>
    </wv-group>
    <span class="page-title">支付方式:</span>
    <wv-group class="appointment-info" >
      <wv-input label="支付方式" placeholder="请输入内容" :readonly="true" v-model="appointmentInfo.paymentMethod">
        <img @click="selectPayment()" :src="arrowImage" class="vcode" slot="ft"/>
      </wv-input>
    </wv-group>
    <div class="sure">
      <wv-button class="" type="primary" @click="sureAppointment()">确认预约</wv-button>
    </div>
  </div>
</template>
<script>
import { Dialog, Toast } from 'we-vue'
export default {
  name: 'SureAppointment',
  data () {
    return {
      msg: '',
      cardImage: '/static/images/appointment/my-card.png',
      arrowImage: '/static/images/appointment/下页.png',
      appointmentInfo: {
        department: '心外科',
        doctor: '牛二',
        outpatientType: '专家号',
        date: '2019-2-19',
        timeRange: '09:00-10:30',
        price: '30元',
        paymentMethod: '微信支付'
      }
    }
  },
  methods: {
    selectPayment (picker, value) {
      this.$nextTick(() => {
        console.log('value:', value)
        console.log(picker.getValues())
      })
    },
    sureAppointment () {
      Dialog.confirm({
        title: '提示信息',
        message: '选择微信支付，适合自费用户，点击确认直接微信付款',
        skin: 'ios',
        showCancelBtn: true
      }).then(action => {
        // 确定后要执行的内容
        Toast('success')
        this.$router.push({ path: '/appointment/detail' })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../assets/css/define';
@import '../../../assets/css/common';

.appointment-info .weui-cells{
  margin-top: 0;
  .weui-cell{
    padding: 1rem;
    .weui-cell__hd .weui-label{
      text-align: left;
      color: #333;
    }

    .weui-cell__bd input.weui-input{
      color: $color-primary-blue;
    }
    .weui-cell__ft img{
      padding-top: 0.3rem;
      width: 1rem;
      height: auto;
    }
  }
}
</style>
<style lang="scss" scoped>
    .sure-appointment-page{
        min-height: 100%;
        .page-title{
          display: block;
          padding: 0.5rem 1rem;
          text-align: left;
        }
        .my-card{
          margin-top: 0;
        }
        .appointment-info .weui-cells{
          margin-top: 0;
        }
        .sure{
          overflow: hidden;
          padding: 0.5rem 1rem;
        }
    }
</style>
