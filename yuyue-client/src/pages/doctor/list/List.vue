<template>
  <div class="doctor-list-page">
    <wv-panel>
        <wv-media-box class="yy-list-item" :thumb='thumb' title="刘宝鸿" description="副主任医师（心血管内科）" to="detail/1"></wv-media-box>
        <wv-media-box class="yy-list-item" :thumb='thumb' title="药不然" description="主任医师（心血管内科）" to="detail/2"></wv-media-box>
    </wv-panel>
  </div>
</template>

<script>

export default {
  name: 'DoctorList',
  data () {
    return { msg: '', thumb: '/static/images/doctor/default.png' }
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
