<template>
  <div class="department-list-page">
    <wv-panel>
        <wv-cell :key="item.id" v-for="item in departments"  :title="item.name" is-link :to="'/doctor/list/' + item.id"></wv-cell>
        <!-- <wv-cell title="心脏内科" is-link to="/appointment/select-doctor/1"></wv-cell>
        <wv-cell title="消化科" is-link to="/appointment/select-doctor/2"></wv-cell> -->
    </wv-panel>
  </div>
</template>

<script>
import { getCanOrderDepartments } from '@/services/department'

export default {
  name: 'DoctorSelectDepartment',
  data () {
    return {
      departments: []
    }
  },
  mounted () {
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
