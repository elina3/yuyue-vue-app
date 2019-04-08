<template>
  <div class="sure-appointment-page">
    <span class="page-title">就诊卡:</span>
    <wv-panel class="my-card">
      <wv-cell :title="nickname || '您还没有绑卡，点击进入绑卡'" is-link :to="'/me/medical_card'">
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
      <wv-button v-show="!hiddenButton" class="" type="primary" @click="sureAppointment()">确认预约</wv-button>
    </div>
  </div>
</template>
<script>
import config from '@/common/config'
import { mapGetters } from 'vuex'
import { previewAppointment, createAppointment } from '@/services/appointment'
import { Dialog, Toast } from 'we-vue'
export default {
  name: 'SureAppointment',
  data () {
    return {
      openId: 'o7-H2wTS0Zniw2W_mkkFH0scU3u4',
      nickname: '姗姗Elina',
      scheduleId: '',
      doctorId: '',
      cardImage: '/client/static/images/appointment/my-card.png',
      arrowImage: '/client/static/images/appointment/下页.png',
      appointmentInfo: {
        department: '',
        doctor: '',
        outpatientType: '',
        date: '',
        timeRange: '',
        price: '',
        paymentMethod: '到院支付',
        paymentMethodType: 'offline'
      },
      hiddenButton: true
    }
  },
  mounted () {
    this.scheduleId = this.$route.query.schedule_id
    this.doctorId = this.$route.query.doctor_id
    this.loadPreviewAppointment()
    if (this.$store.state.memberInfo) {
      this.openId = this.$store.state.memberInfo.open_id
      this.nickname = this.$store.state.memberInfo.nickname
      this.hiddenButton = false
    } else {
      this.nickname = '您还没有绑卡，点击此处去绑卡'
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
      let message = this.appointmentInfo.paymentMethodType === 'offline' ? '您确定要预定吗？' : '选择微信支付，适合自费用户，点击确认直接微信付款后即可预约成功！'
      Dialog.confirm({
        title: '提示信息',
        message: message,
        skin: 'ios',
        showCancelBtn: true
      }).then(action => {
        // 确定后要执行的内容
        this.createAppointment((err, appointment) => {
          if (err) {
            Toast(err.zh_message)
            return
          }
          if (appointment) {
            this.$router.push({ path: '/appointment/detail/' + appointment._id })
          } else {
            Toast('创建失败')
          }
        })
      }, cancel => {
        console.log('cancel')
      })
    },
    loadPreviewAppointment () {
      previewAppointment({doctor_id: this.doctorId, schedule_id: this.scheduleId}).then(res => {
        console.log(res)
        if (res.appointment_info) {
          this.appointmentInfo.doctor = res.appointment_info.doctor_name
          this.appointmentInfo.department = res.appointment_info.department_name
          this.appointmentInfo.outpatientType = config.outpatient_type[res.appointment_info.outpatient_type] || '未知门诊'
          this.appointmentInfo.timeRange = res.appointment_info.start_time_string + '~' + res.appointment_info.end_time_string
          this.appointmentInfo.date = res.appointment_info.date_string
          this.appointmentInfo.price = res.appointment_info.price > 0 ? parseFloat(res.appointment_info.price / 100) + '元' : '未设置'
        }
      }, err => {
        console.error(err)
      })
    },
    createAppointment (callback) {
      let obj = {
        doctor_id: this.doctorId,
        schedule_id: this.scheduleId,
        open_id: this.openId,
        payment_method: this.appointmentInfo.paymentMethodType
      }
      createAppointment(obj).then(res => {
        console.log(res)
        return callback(res.err, res.appointment)
      }, err => {
        console.error(err)
      })
    }
  },
  computed: {
    ...mapGetters(['memberInfo']),
    getMemberInfo () {
      return this.$store.state.memberInfo
    }
  },
  watch: {
    getMemberInfo (val) {
      if (val) {
        this.openId = val.open_id
        this.nickname = val.nickname
        this.hiddenButton = false
      }
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
