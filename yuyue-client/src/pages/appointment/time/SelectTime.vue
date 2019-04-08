<template>
  <div class="doctor-detail-page">
      <div class="doctor-title-area">
          <div class="left">
              <img v-if="doctor.head_photo" :src="doctor.head_photo"/>
              <img v-if="!doctor.head_photo" src="../../../assets/images/doctor/default2.jpg"/>
          </div>
          <div class="right">
              <div class="doctor-info">
                <strong>{{doctor.nickname}}</strong>
                <p>{{doctor.job_title}}</p>
                <span class="orange">{{doctor.outpatient_type}}</span> <span class="green">{{doctor.price}}</span>

                <wv-button  @click="jump" class="yy-default-button" type="primary" :mini='true'>医生简介</wv-button>
              </div>
          </div>
      </div>
      <div class="date-select">
          <week-range :init-dates="dateObjs" @onClickDate="onClickDate"></week-range>
      </div>
      <wv-panel class="select-time-range" title="请选择就诊时段">
        <wv-cell :key="item.id" v-for="item in currentTimeRanges" :title="item.title" is-link :to="{ path: '/appointment/sure', query: { schedule_id: item.id, doctor_id: doctorId }}"></wv-cell>
        <!-- <wv-cell title="09:30-10:00" is-link :to="{ path: '/appointment/sure', query: { schedule_id: '5c7948e1345d3c7160035f19', doctor_id: doctorId}}"></wv-cell> -->
      </wv-panel>

  </div>
</template>
<script>
import config from '@/common/config'
import { getDoctorSchedules } from '@/services/appointment'
import weekRange from '../../../components/WeekRange'
export default {
  name: 'DoctorDetail',
  components: {
    weekRange
  },
  data () {
    return {
      doctorId: '',
      doctor: {},
      dateObjs: [],
      currentTimeRanges: []
    }
  },
  mounted () {
    this.doctorId = this.$route.params.id
    this.loadDoctorSchedules()
  },
  methods: {
    onClickDate (dateItem) {
      console.log(dateItem)
      this.currentTimeRanges = dateItem.schedules
    },
    jump () {
      this.$router.push({ path: '/doctor/detail/' + this.doctorId })
    },
    loadDoctorSchedules () {
      getDoctorSchedules({doctor_id: this.doctorId}).then(res => {
        console.log(res)
        if (res.doctor) {
          this.doctor = {
            nickname: res.doctor.nickname,
            outpatient_type: config.outpatient_type[res.doctor.outpatient_type] || '未知门诊',
            price: res.doctor.price > 0 ? parseFloat(res.doctor.price / 100) + '元' : '未设置',
            job_title: res.doctor.job_title ? res.doctor.job_title.name : '未设置',
            head_photo: res.doctor.head_photo ? config.imageUrl + res.doctor.head_photo : ''
          }
        }
        if (res.schedules && res.schedules.length > 0) {
          let objs = res.schedules.map(item => {
            return {
              date: new Date(item.date_string),
              disabled: false,
              schedules: item.schedules.map(schedule => {
                return {
                  id: schedule._id,
                  title: schedule.start_time_string + '~' + schedule.end_time_string + '(余号：' + (schedule.number_count - schedule.booked) + ')',
                  number_count: schedule.number_count
                }
              })
            }
          })
          console.log(objs)
          this.dateObjs = JSON.parse(JSON.stringify(objs))
        }
      },
      err => {
        console.log('err:', err)
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
    .doctor-detail-page{
        background: #fff;
        min-height: 100%;
        .doctor-title-area{
            padding: 0;
            background: url('/client/static/images/doctor/background.jpeg') no-repeat top left;
            background-size: cover;
            width: 100%;
            height: 10rem;

            .left, .right{
                display: inline-block;
                float: left;
                height: 100%;
            }

            .left{
                width: 25%;
                img{
                    margin: 3rem auto;
                    display: block;
                    width: 4rem;
                    height: 4rem;
                    border: 1px solid #fff;
                    border-radius: 2rem;
                }
            }
            .right{
                width: 75%;

                .doctor-info{
                    margin-top: 2rem;
                    padding-right: 1rem;
                    overflow:hidden;
                    >span, strong, p{
                        text-align: left;
                        color: #fff;
                    }
                    >strong{
                        display: block;
                        font-size: 1.25rem;
                    }
                    >span{
                        display: inline-block;
                        float: left;
                        border-radius: 0.5rem;
                        padding: 0 0.5rem;
                        font-weight: bold;
                    }
                    p{
                        line-height: 2rem;
                        font-weight: bold;
                    }
                    span.orange{
                        background: $color-orange;
                    }
                    span.green{
                        background: $color-green;
                        margin-left: 1rem;
                    }

                    .yy-default-button{
                        width: 4rem;
                        float: right;
                    }
                }
            }
        }
        .doctor-detail-item{
            overflow: hidden;
            margin: 1rem auto;
            padding: 0 0.5rem;
            label{
                display: inline-block;
                float: left;
                width: 0.25rem;
                height: 1.5rem;
                background: $color-primary-blue;
            }
            strong{
                display: inline-block;
                float: left;
                line-height: 1.5rem;
                margin-left: 0.5rem;
            }

            p{
                display: block;
                float: left;
                padding: 0.5rem;
                text-align: left;
                text-indent: 1rem;
            }
        }
        .select-time-range{
            padding: 0 0.5rem;
        }
    }
</style>
