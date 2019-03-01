<template>
  <div class="department-list-page">
    <wv-panel>
      <wv-media-box :key="item.id" v-for="item in departments" class="yy-list-item" :thumb='thumb' :title="item.name" :description="item.description" :to="'detail/'+item.id"></wv-media-box>
        <!-- <wv-media-box class="yy-list-item" :thumb='thumb' title="心血管内科" description="目前医生37人" to="detail/1"></wv-media-box>
        <wv-media-box class="yy-list-item" :thumb='thumb' title="消化内科" description="专业规模在同级医院屈指可数" to="detail/2"></wv-media-box> -->
    </wv-panel>
  </div>
</template>

<script>
import { getDepartments, getUserCode } from '@/services/department'

export default {
  name: 'DepartmentList',
  data () {
    return {
      departments: [],
      thumb: '/client/static/images/department/default.png'
    }
  },
  mounted () {
    this.getUserCode()
    this.loadDepartments()
  },
  methods: {
    loadDepartments () {
      getDepartments({}).then(res => {
        console.log('load')
        console.log(res)
        if (res.departments) {
          this.departments = res.departments.map(item => {
            return {
              id: item._id,
              name: item.name,
              description: item.description
            }
          })
        }
      },
      err => {
        console.log('err:', err)
      })
    },
    getUserCode () {
      getUserCode({}).then(res => {
        console.log('user code:')
        console.log(res)
        alert('res' + JSON.stringify(res));
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
    .department-list-page{
        background: #fff;
        min-height: 100%;
    }
</style>
