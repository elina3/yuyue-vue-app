<template>
  <div class="department-page">
    <div class="yy-grid">
      <wv-grid>
        <wv-grid-item>
          <img src="../../assets/images/department/呼吸内科.png" >
          <span>呼吸内科</span>
        </wv-grid-item>
        <wv-grid-item>
          <img src="../../assets/images/department/康复科.png" >
          <span>康复科</span>
        </wv-grid-item>
        <wv-grid-item>
          <img src="../../assets/images/department/心内科.png" >
          <span>心内科</span>
        </wv-grid-item>
        <wv-grid-item>
          <img src="../../assets/images/department/急诊科.png" >
          <span>急诊科</span>
        </wv-grid-item>
        <wv-grid-item>
          <img src="../../assets/images/department/普外科.png" >
          <span>普外科</span>
        </wv-grid-item>
        <wv-grid-item>
          <img src="../../assets/images/department/检验科.png" >
          <span>检验科</span>
        </wv-grid-item>
        <wv-grid-item>
          <img src="../../assets/images/department/消化内科.png" >
          <span>消化内科</span>
        </wv-grid-item>
        <wv-grid-item>
          <img src="../../assets/images/department/眼科.png" >
          <span>眼科</span>
        </wv-grid-item>
        <wv-grid-item>
          <img src="../../assets/images/department/神经外科.png" >
          <span>神经外科</span>
        </wv-grid-item>
        <wv-grid-item>
          <img src="../../assets/images/department/空勤体检.png" >
          <span>空勤体检</span>
        </wv-grid-item>
        <wv-grid-item>
          <img src="../../assets/images/department/耳鼻喉科.png" >
          <span>耳鼻喉科</span>
        </wv-grid-item>
        <wv-grid-item>
          <img src="../../assets/images/department/骨科.png" >
          <span>骨科</span>
        </wv-grid-item>
      </wv-grid>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Department',
  data () {
    return { msg: '' }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.department-page{
  .yy-grid {
    border: none;
    margin: 0 auto;

    .weui-grids {
      border: none !important;
      background: #fff;
      margin: 0 auto;

      .weui-grid {
        img {
          display: block;
          margin: 0.5rem auto;
          margin-top: 1rem;
          width: 45%;
          height: auto;
        }

        span {
          margin-bottom: 1rem;
          display: block;
        }
      }
    }
  }
}
</style>
