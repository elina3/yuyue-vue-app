<template>
  <div class="home-page">
    <div class="yy-img-header">
      <div class="home-title">
        <div class="logo">
          <img src="../../assets/images/home/logo-red.png"/>
        </div>
        <div class="text">
          <span>瑞金医院古北分院  |  民航上海医院</span>
          <span>民航华东局航空人员体检鉴定中心</span>
        </div>
      </div>
      <div class="home-picture">
        <img src="../../assets/images/home/hospital.png"/>
        <img class="background" src="../../assets/images/home/background.png"/>
      </div>
    </div>
    <div class="yy-grid">

      <wv-grid>
        <wv-grid-item to="/">
          <img src="../../assets/images/home/医院介绍.png" >
          <span>医院介绍</span>
        </wv-grid-item>
        <wv-grid-item to="/">
          <img src="../../assets/images/home/科室介绍.png" >
          <span>科室介绍</span>
        </wv-grid-item>
        <wv-grid-item>
          <img src="../../assets/images/home/专家介绍.png" >
          <span>专家介绍</span>
        </wv-grid-item>
        <wv-grid-item to="/">
          <img src="../../assets/images/home/就医流程.png" >
          <span>就医流程</span>
        </wv-grid-item>

        <wv-grid-item to="/">
          <img src="../../assets/images/home/预约.png" >
          <span>预约</span>
        </wv-grid-item>

        <wv-grid-item to="/">
          <img src="../../assets/images/home/报告查询.png" >
          <span>报告查询</span>
        </wv-grid-item>

        <wv-grid-item to="/">
          <img src="../../assets/images/home/医院导航.png" >
          <span>医院导航</span>
        </wv-grid-item>
        <wv-grid-item to="/">
          <img src="../../assets/images/home/导诊.png" >
          <span>导诊</span>
        </wv-grid-item>
        <wv-grid-item url="https://www.baidu.com">
          <img src="../../assets/images/home/最新消息.png" >
          <span>最新消息</span>
        </wv-grid-item>
      </wv-grid>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return { msg: 'Home page init' }
  },
  methods: {
    onClick () {
      console.log('click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./home.scss";
</style>
