<template>
  <div class="doctor-list-page">
    <wv-panel>
        <wv-media-box :key="item.id" v-for="item in doctors"  class="yy-list-item" :thumb='item.head_photo' :title="item.nickname" :description="item.description" :to="item.url"></wv-media-box>
    </wv-panel>
  </div>
</template>

<script>
import { getDoctors } from '@/services/doctor'
import config from '@/common/config'

export default {
  name: 'DoctorList',
  data () {
    return { doctors: [], departmentId: '', msg: '', thumb: '/client/static/images/doctor/default.png' }
  },
  mounted () {
    console.log('this.$route.params.id:', this.$route.params.id)
    this.departmentId = this.$route.params.id
    if (this.departmentId === '-1') {
      this.departmentId = ''
    }
    console.log('departmentid:', this.departmentId)
    this.loadDoctors()
  },
  methods: {
    loadDoctors () {
      let obj = {
        on_shelf: true,
        outpatient_type: 'expert'
      }
      if (this.departmentId) {
        obj.department_id = this.departmentId
      }
      getDoctors(obj).then(res => {
        console.log(res)
        if (res.doctors) {
          this.doctors = res.doctors.map(item => {
            return {
              url: '/doctor/detail/' + item._id,
              id: item._id,
              nickname: item.nickname,
              description: item.department.name + ' ' + item.job_title.name,
              head_photo: item.head_photo ? config.imageUrl + item.head_photo : this.thumb
            }
          })
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
.doctor-list-page {
  .weui-panel .weui-panel__bd .yy-list-item .weui-media-box__bd .weui-media-box__desc{
    line-height: 2.8em !important;
    font-size: 0.8rem;
  }
}
</style>
<style lang="scss" scoped>
    .doctor-list-page{
        background: #fff;
        min-height: 100%;
    }
</style>
