<template>
  <div class="doctor-list-page">
    <wv-panel>
        <wv-media-box :key="item.id" v-for="item in doctors"  class="yy-list-item" :thumb='thumb' :title="item.nickname" :description="item.description" :to="item.url"></wv-media-box>
    </wv-panel>
  </div>
</template>

<script>
import { getDoctors } from '@/services/doctor'

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
        on_shelf: true
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
              description: item.description
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
</style>
<style lang="scss" scoped>
    .doctor-list-page{
        background: #fff;
        min-height: 100%;
    }
</style>
