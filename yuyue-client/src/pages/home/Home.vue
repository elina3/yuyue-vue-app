<template>
  <div class="home-page">
    <div class="yy-img-header">
      <div class="home-title">
        <div class="logo">
          <img src="../../assets/images/home/logo-red.png"/>
        </div>
        <div class="text">
          <span>民航上海医院  |  瑞金医院古北分院</span>
          <!-- <span>民航华东局航空人员体检鉴定中心</span> -->
        </div>
      </div>
      <div class="home-picture">
        <img src="../../assets/images/home/hospital.png"/>
        <img class="background" src="../../assets/images/home/background.png"/>
      </div>
    </div>
    <div class="yy-grid">

      <wv-grid>
        <wv-grid-item to="/hospital">
          <img src="../../assets/images/home/医院介绍.png" >
          <span>医院介绍</span>
        </wv-grid-item>
        <wv-grid-item to="/department/list">
          <img src="../../assets/images/home/科室介绍.png" >
          <span>科室介绍</span>
        </wv-grid-item>
        <wv-grid-item to="/doctor/select_department">
          <img src="../../assets/images/home/专家介绍.png" >
          <span>专家介绍</span>
        </wv-grid-item>
        <wv-grid-item to="/">
          <img src="../../assets/images/home/就医流程.png" >
          <span>就医流程</span>
        </wv-grid-item>

        <wv-grid-item to="/appointment/select-department">
          <img src="../../assets/images/home/预约.png" >
          <span>门诊预约</span>
        </wv-grid-item>

        <wv-grid-item to="/me/report">
          <img src="../../assets/images/home/报告查询.png" >
          <span>门诊报告</span>
        </wv-grid-item>

        <!-- <wv-grid-item url="https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E6%B0%91%E8%88%AA%E4%B8%8A%E6%B5%B7%E5%8C%BB%E9%99%A2(%E7%91%9E%E9%87%91%E5%8F%A4%E5%8C%97%E5%88%86%E9%99%A2)&c=289&searchFlag=bigBox&version=4&src_from=webapp_all_bigbox&wd2=%E4%B8%8A%E6%B5%B7%E5%B8%82%E9%95%BF%E5%AE%81%E5%8C%BA&sug_forward=a74481d61b52415ff503b85d&src=1&uid=a74481d61b52415ff503b85d&industry=hospital&qid=8713050396733245199/showall=1&pos=0&da_ref=listclk&da_qrtp=11&da_adtitle=%E6%B0%91%E8%88%AA%E4%B8%8A%E6%B5%B7%E5%8C%BB%E9%99%A2(%E7%91%9E%E9%87%91%E5%8F%A4%E5%8C%97%E5%88%86%E9%99%A2)&vt=map/?fromhash=1">
          <img src="../../assets/images/home/医院导航.png" >
          <span>医院位置</span>
        </wv-grid-item> -->
        <wv-grid-item url="https://m.amap.com/search/mapview/__p=B00155IL5Z,31.198135,121.401188,%E7%91%9E%E9%87%91%E5%8C%BB%E9%99%A2%E5%8F%A4%E5%8C%97%E5%88%86%E9%99%A2,%E7%BA%A2%E5%AE%9D%E7%9F%B3%E8%B7%AF398%E5%8F%B7&src=app_share&callnative=1&callapp=0&poiid=B00155IL5Z">
          <img src="../../assets/images/home/医院导航.png" >
          <span>医院位置</span>
        </wv-grid-item>
        <wv-grid-item url="http://mh-rjgb.com:9000/home/login.html">
          <img src="../../assets/images/home/微自诊.png" >
          <span>体检管理</span>
        </wv-grid-item>
        <wv-grid-item url="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4NTE3ODYyNA==#wechat_redirect">
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
