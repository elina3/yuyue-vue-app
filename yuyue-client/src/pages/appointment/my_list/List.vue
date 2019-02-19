<template>
  <div class="department-page">
    <wv-panel title="">
      <wv-media-box title="心外科 刘医生 专家门诊" description="就诊人： 牛二" to="/appointment/detail" type="text">
        <ul class="weui-media-box__info" slot="box_ft">
          <li class="weui-media-box__info__meta">2019-2-20 10:00-10:30</li>
        </ul>
        <img src="../../../assets/images/appointment/下页.png"/>
      </wv-media-box>
      <wv-media-box title="心外科 刘医生 专家门诊" description="就诊人： 牛二" to="/" type="text">
        <ul class="weui-media-box__info" slot="box_ft">
          <li class="weui-media-box__info__meta">2019-2-20 10:00-10:30</li>
        </ul>
      </wv-media-box>
    </wv-panel>
  </div>
</template>

<script>

export default {
  name: 'MyAppointmentList',
  data () {
    return { msg: '' }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../assets/css/common'
</style>
