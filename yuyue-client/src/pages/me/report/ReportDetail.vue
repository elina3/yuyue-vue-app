<template>
  <div class="report-detail-page">
    <div class="report-base-info">
      <span>体检人信息：</span>
      <div class="white-panel">
        <div class="info-item">
          <span>姓名:</span><span>刘德华</span>
        </div>
        <div class="info-item">
          <span>身份证号:</span><span>410825197768541234</span>
        </div>
        <div class="info-item">
          <span>单位名称:</span><span>民航上海医院</span>
        </div>
        <div class="info-item">
          <span>体检编号:</span><span>1343242796152</span>
        </div>
        <div class="info-item">
          <span>体检日期:</span><span>2019-4-3 10:23:33</span>
        </div>
      </div>
    </div>
    <div class="report-detail">
      <span>报告详情：</span>
      <div class="white-panel">
        <div class="detail-item">
          <span>血液检查</span>
          <div class="info-head">
            <span>项目</span>
            <span>结果（参考范围）</span>
          </div>
          <div class="info-item">
            <span>红细胞总数RBC1</span>
            <span>4.73（4.10-5.0）</span>
          </div>
          <div class="info-item">
            <span>甘油三酯</span>
            <span>1.92（0.45-1.7）</span>
          </div>
          <div class="info-item">
            <span>总胆固醇</span>
            <span>3.62（3.1-5.7）</span>
          </div>
        </div>
        <div class="detail-item">
          <span>血液检查</span>
          <div class="info-head">
            <span>项目</span>
            <span>结果（参考范围）</span>
          </div>
          <div class="info-item">
            <span>红细胞总数RBC1</span>
            <span>4.73（4.10-5.0）</span>
          </div>
          <div class="info-item">
            <span>甘油三酯</span>
            <span>1.92（0.45-1.7）</span>
          </div>
          <div class="info-item">
            <span>总胆固醇</span>
            <span>3.62（3.1-5.7）</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ReportDetail',
  data () {
    return {
      name: '报告详情'
    }
  },
  methods: {
    onClick (index) {
      // this.$toast.text(`点击 ${index}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../assets/css/define';
.report-detail-page{
  .white-panel{
    display: block;
    background: #fff;
    padding: 0.5rem;
  }
  .report-base-info{
    display: block;
    overflow: hidden;
    width: 100%;
    >span{
      display: block;
      padding: 0 0.5rem;
      height: 2rem;
      line-height: 2rem;
      overflow: hidden;
      text-align: left;
    }
    .white-panel .info-item{
      display: block;
      overflow: hidden;
      >span{
        float: left;
      }
    }
  }
  .report-detail{
    display: block;
    overflow: hidden;
    width: 100%;
    >span{
      display: block;
      padding: 0 0.5rem;
      height: 2rem;
      line-height: 2rem;
      overflow: hidden;
      text-align: left;
    }

    .detail-item{
      border-bottom: 1px solid $border-normal-color;
      &:nth-last-child(1){
        border-bottom: none;
      }
      >span{
        display: block;
        height: 2rem;
        line-height: 2rem;
        overflow: hidden;
        text-align: left;
      }
      .info-head, .info-item{
        display: block;
        overflow: hidden;
        >span{
          display: inline-block;
          float: left;
          width: 50%;
          height: 2rem;
          text-align: left;
        }
      }
      .info-head >span{
        color: $color-green;
      }
    }
  }
}
</style>
