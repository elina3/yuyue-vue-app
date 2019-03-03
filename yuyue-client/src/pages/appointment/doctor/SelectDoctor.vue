<template>
  <div class="select-doctor-page">
    <div class="doctor-list">
        <div class="doctor-item" :key="item.id" v-for="item in doctors" @click="jump(item.id)">
            <div class="photo-area">
                <!-- <img src="../../../assets/images/doctor/default.png"/> -->
                <img :src="item.head_photo"/>
            </div>
            <div class="base-info-area">
                <strong>{{item.nickname}} {{item.job_title.name}}</strong>
                <span class="orange">{{item.outpatient_type}}</span>
                <span class="arrow">></span>
                <span class="green">{{item.price > 0 ? parseFloat(item.price / 100) + '元' : '未设置'}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import config from '@/common/config'
import { getDoctors } from '@/services/doctor'

export default {
  name: 'SelectDoctor',
  data () {
    return { departmentId: '', doctors: [] }
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
    jump (id) {
      this.$router.push({ path: '/appointment/select-time/' + id })
    },
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
              id: item._id,
              nickname: item.nickname,
              description: item.description,
              outpatient_type: config.outpatient_type[item.outpatient_type] || '未知门诊',
              job_title: item.job_title,
              price: item.price,
              head_photo: item.head_photo ? config.imageUrl + item.head_photo : '../../../assets/images/doctor/default.png'
            }
          })
          console.log(this.doctors)
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
    .select-doctor-page{
        background: #fff;
        min-height: 100%;
        .doctor-list{
            width: 100%;
            overflow: hidden;
            .doctor-item{
                height: 6rem;
                &:nth-child(1){
                    border-top: none;
                }
                border-top: 1px solid $border-normal-color;
                .photo-area,.base-info-area{
                    display: inline-block;
                    float: left;
                    height: 100%;
                }
                .photo-area{
                    width: 25%;
                    img{
                        width: 60%;
                        margin: 1rem auto;
                        border-radius: 2rem;
                    }
                }
                .base-info-area{
                    width: 70%;
                    >*{
                        text-align: left;
                    }
                    strong{
                        margin: 1.25rem 0 0.5rem 0;
                        display: block;
                    }
                    span{
                        display: inline-block;

                        &.orange, &.green{
                            color: #fff;
                            padding: 0 0.5rem;
                            border-radius: 0.5rem;
                        }
                        &.orange{
                            float: left;
                            background: $color-orange;
                        }
                        &.green{
                            margin-top: -1rem;
                            margin-right: 0.5rem;
                            float: right;
                            background: $color-green;
                        }
                        &.arrow{
                            margin-top: -1rem;
                            display: inline-block;
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>
