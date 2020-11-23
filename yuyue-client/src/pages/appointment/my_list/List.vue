<template>
  <div class="department-page">
    <wv-panel title="">
      <wv-media-box :key="item.id" v-for="item in appointments" :title="item.title" :description="'就诊人：' + item.description" :to="'/appointment/detail/' + item.id" type="text">
        <ul class="weui-media-box__info" slot="box_ft">
          <li class="weui-media-box__info__meta">{{item.timeRange}}{{ '    '}}{{item.status}}</li>
        </ul>
        <img src="../../../assets/images/appointment/下页.png"/>
      </wv-media-box>
      <!-- <wv-media-box title="心外科 刘医生 专家门诊" description="就诊人： 牛二" to="/" type="text">
        <ul class="weui-media-box__info" slot="box_ft">
          <li class="weui-media-box__info__meta">2019-2-20 10:00-10:30</li>
        </ul>
      </wv-media-box> -->
    </wv-panel>
  </div>
</template>

<script>
import config from '@/common/config'
import { mapGetters } from 'vuex'
import { getMyAppointments } from '@/services/appointment'

export default {
  name: 'MyAppointmentList',
  data () {
    return { open_id: 'o7-H2wTS0Zniw2W_mkkFH0scU3u4', appointments: [] }
  },
  mounted () {
    var memberInfo = this.$store.state.memberInfo
    if (memberInfo) {
      this.open_id = memberInfo.open_id
      this.loadAppointments()
    }
  },
  methods: {
    jump (id) {
      this.$router.push({ path: '/appointment/select-time/' + id })
    },
    loadAppointments () {
      let obj = {
        open_id: this.open_id
      }
      getMyAppointments(obj).then(res => {
        console.log(res)
        if (res.appointments) {
          this.appointments = res.appointments.map(item => {
            // 已取消时优先显示“已取消”，除了这种情况，如果已停诊时显示“已停诊”，剩余情况显示对应状态
            return {
              id: item._id,
              title: item.department.name + ' ' + item.doctor.nickname + ' ' + config.outpatient_type[item.doctor.outpatient_type] || '',
              description: item.member.nickname || item.IDCard,
              timeRange: new Date(item.start_time).Format('yyyy-MM-dd hh:mm') + '~' + new Date(item.end_time).Format('hh:mm'),
              status: !item.canceled && item.doctor_schedule.is_stopped ? '已停诊' : config.appointment_status[item.status]
            }
          })
          console.log(this.doctors)
        }
      },
      err => {
        console.log('err:', err)
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
        this.open_id = val.open_id
        this.loadAppointments()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../assets/css/common'
</style>
