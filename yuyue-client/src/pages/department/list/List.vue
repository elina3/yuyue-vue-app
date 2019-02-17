<template>
  <div class="department-list-page">
    <wv-panel>
        <wv-media-box class="yy-list-item" :thumb='thumb' title="心血管内科" description="目前医生37人" to="/"></wv-media-box>
        <wv-media-box class="yy-list-item" :thumb='thumb' title="消化内科" description="专业规模在同级医院屈指可数" to="/"></wv-media-box>

    </wv-panel>
  </div>
</template>

<script>

export default {
  name: 'DepartmentList',
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
