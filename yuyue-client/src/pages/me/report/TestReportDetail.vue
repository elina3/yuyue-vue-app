<template>
  <div class="report-detail-page">
    <div class="report-base-info">
      <span>患者信息：</span>
      <div class="white-panel">
        <div class="info-item">
          <span>姓名:</span><span>{{baseInfo.sickerName}}</span>
        </div>
        <div class="info-item">
          <span>性别:</span><span>{{baseInfo.sickerSex}}</span>
        </div>
        <div class="info-item">
          <span>年龄:</span><span>{{baseInfo.sickerAge}}</span>
        </div>
        <!-- <div class="info-item">
          <span>临床诊断:</span><span>{{baseInfo.clinicalDiagnosis}}</span>
        </div> -->
        <div class="info-item">
          <span>科别:</span><span>{{baseInfo.category}}</span>
        </div>
        <div class="info-item">
          <span>样本种类:</span><span>{{baseInfo.sampleType}}</span>
        </div>
        <div class="info-item">
          <span>报告时间:</span><span>{{baseInfo.reportingTime}}</span>
        </div>
      </div>
    </div>
    <div class="report-detail">
      <span>报告详情：</span>
      <div class="white-panel">
        <div class="detail-item">
          <!-- <span>血液检查</span> -->
          <div class="info-head">
            <span>项目</span>
            <span>结果</span>
            <span>参考范围</span>
          </div>
          <div class="info-item" :key="item.id" v-for="item of items">
            <span>{{item.name}}</span>
            <span>{{item.result}}</span>
            <span>{{item.reference ? ('(' + item.reference + ')') : ''}}</span>
          </div>
          <!-- <div class="info-item">
            <span>霉菌</span>
            <span>未见</span>
          </div>
          <div class="info-item">
            <span>尿微量白蛋白</span>
            <span>20（0-25mg/l）</span>
          </div> -->
        </div>
        <!-- <div class="detail-item">
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getReportDetail } from '@/services/report'
export default {
  name: 'TestReportDetail',
  data () {
    return {
      reportId: '',
      name: '检验报告详情',
      baseInfo: {},
      items: []
    }
  },
  mounted () {
    this.reportId = this.$route.params.id
    this.loadReportDetail()
  },
  methods: {
    loadReportDetail () {
      let obj = {
        report_id: this.reportId,
        report_type: 'test_report'
      }
      getReportDetail(obj).then(res => {
        if (res.report) {
          console.log(res.report)
          this.baseInfo = res.report.baseInfo || {}
          this.items = res.report.items || []
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
