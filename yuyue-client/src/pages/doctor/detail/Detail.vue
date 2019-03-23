<template>
  <div class="doctor-detail-page">
      <div class="doctor-title-area">
          <div class="left">
              <img v-if="doctor.head_photo" :src="doctor.head_photo"/>
              <img v-if="!doctor.head_photo" src="../../../assets/images/doctor/default2.jpg"/>
          </div>
          <div class="right">
              <div class="doctor-info">
                <strong>{{ doctor.nickname }}</strong>
                <p>{{doctor.job_title}} {{doctor.department}}</p>
                <span class="orange">{{doctor.outpatient_type}}</span> <span class="green">{{doctor.price}}</span>

                <wv-button @click="jump()" class="yy-default-button" type="primary" :mini='true'>预约</wv-button>
              </div>
          </div>
      </div>
      <div class="doctor-detail-item">
          <label></label>
          <strong>擅长</strong>
          <p>
              {{doctor.good_at || '未设置'}}
          </p>
      </div>

      <div class="doctor-detail-item">
          <label></label>
          <strong>简介</strong>
          <p>
              {{doctor.brief || '未设置'}}
          </p>
      </div>
  </div>
</template>
<script>
import config from '@/common/config'
import { getDoctorDetail } from '@/services/doctor'

export default {
  name: 'DoctorDetail',
  data () {
    return { msg: '', doctorId: '', doctor: {}, thumb: '../../../assets/images/doctor/default2.jpg' }
  },
  mounted () {
    console.log('detail')
    this.doctorId = this.$route.params.id
    this.loadDoctorDetail()
  },
  methods: {
    jump () {
      this.$router.push({ path: '/appointment/select-time/' + this.doctorId })
    },
    loadDoctorDetail () {
      getDoctorDetail({user_id: this.doctorId}).then(res => {
        console.log(res)
        if (res.user) {
          this.doctor = {
            nickname: res.user.nickname,
            department: res.user.department.name,
            job_title: res.user.job_title.name,
            outpatient_type: config.outpatient_type[res.user.outpatient_type] || '未知门诊',
            price: res.user.price > 0 ? parseFloat(res.user.price / 100) + '元' : '未设置',
            good_at: res.user.good_at,
            brief: res.user.brief,
            head_photo: res.user.head_photo ? config.imageUrl + res.user.head_photo : ''
          }
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
                        border-radius: 2rem;
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
                width: 100%;
                min-height: 4rem;
            }
        }
    }
</style>
