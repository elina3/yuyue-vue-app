<template>
  <div class="department-list-page">
    <wv-panel>
        <wv-cell :key="item.id" v-for="item in departments"  :title="item.name" is-link :to="'/appointment/select-doctor/' + item.id"></wv-cell>
        <!-- <wv-cell title="心脏内科" is-link to="/appointment/select-doctor/1"></wv-cell>
        <wv-cell title="消化科" is-link to="/appointment/select-doctor/2"></wv-cell> -->
    </wv-panel>
  </div>
</template>

<script>
import { getCanOrderDepartments } from '@/services/department'

export default {
  name: 'SelectDepartment',
  data () {
    return {
      departments: []
    }
  },
  mounted () {
    alert('预约之前，请务必前往公众号底部菜单栏填写承诺书！若已填写，请忽略。')
    this.loadDepartments()
  },
  methods: {
    loadDepartments () {
      getCanOrderDepartments({}).then(res => {
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
