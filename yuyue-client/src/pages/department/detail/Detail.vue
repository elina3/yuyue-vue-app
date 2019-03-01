<template>
  <div class="department-detail-page">
      <div class="department-title">
          <label></label>
          <strong>{{department.name}}</strong>

          <wv-button class="yy-default-button" type="primary" :plain='true' :mini='true' @click="jump()">专家</wv-button>
      </div>
      <div class="detail">
          <div class="picture-area">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=993242006,2591297731&fm=26&gp=0.jpg"/>
          </div>
          <p>
              {{department.description ? department.description : '无内容'}}
          </p>
      </div>
  </div>
</template>
<script>
import { getDepartmentDetail } from '@/services/department'
export default {
  name: 'DepartmentDetail',
  data () {
    return { departmentId: '', department: {}, msg: '', thumb: '/client/static/images/department/default.png' }
  },
  mounted () {
    this.departmentId = this.$route.params.id
    this.loadDepartmentDetail()
  },
  methods: {
    jump () {
      console.log('this.departmentId')
      this.$router.push({ path: '/doctor/list/' + this.departmentId })
    },
    loadDepartmentDetail () {
      getDepartmentDetail({department_id: this.departmentId}).then(res => {
        console.log(res)
        if (res.department) {
          this.department = res.department || {}
        }
      },
      err => {
        console.log('err:', err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/css/define';
    .department-detail-page{
        background: #fff;
        min-height: 100%;
        .department-title{
            margin: 1rem auto;
            padding: 0 0.5rem;
            height: 2rem;
            label{
                display: inline-block;
                float: left;
                width: 0.5rem;
                height: 2rem;
                background: $color-primary-blue;
            }
            strong{
                display: inline-block;
                float: left;
                line-height: 2rem;
                margin-left: 0.5rem;
            }

            .yy-default-button{
                width: 4rem;
                float: right;
            }
        }
        .detail{
            .picture-area{
                margin: 0 0.5rem;

                img{
                    width: 100%;
                    height: auto;
                    border-radius: 1rem;
                }
            }
            p{
                padding: 0.5rem;
                text-align: left;
                text-indent: 1rem;
                min-height: 4rem;
            }
        }
    }
</style>
