<template>
  <div class="department-list-page">
      确认预约
    <wv-panel>
        <wv-cell title="心脏内科" is-link to="/appointment/select-doctor/1"></wv-cell>
        <wv-cell title="消化科" is-link to="/appointment/select-doctor/2"></wv-cell>
    </wv-panel>
  </div>
</template>

<script>

export default {
  name: 'SureAppointment',
  data () {
    return { msg: '', thumb: '/static/images/department/default.png' }
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
