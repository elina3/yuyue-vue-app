<template>
  <div class="report-detail-page">
    <div class="report-base-info">
      <span>患者信息：</span>
      <div class="white-panel">
        <div class="info-item">
          <span>姓名:</span><span>{{report.sickerName}}</span>
        </div>
        <div class="info-item">
          <span>性别:</span><span>{{report.sickerSex}}</span>
        </div>
        <div class="info-item">
          <span>年龄:</span><span>{{report.sickerAge}}</span>
        </div>
        <!-- <div class="info-item">
          <span>临床诊断:</span><span>{{report.clinicalDiagnosis}}</span>
        </div> -->
        <div class="info-item">
          <span>科别:</span><span>{{report.category}}</span>
        </div>
        <div class="info-item">
          <span>检查部位:</span><span>{{report.BodyPart}}</span>
        </div>
        <div class="info-item">
          <span>报告时间:</span><span>{{report.reportingTime}}</span>
        </div>
      </div>
    </div>
    <div class="report-detail">
      <span>报告详情：</span>
      <div class="white-panel">
        <div class="detail-item">
          <span>表现或描述:</span>
          <div class="expandingArea">
              <pre>{{report.description}}<br></pre>
              <textarea disabled placeholder="" v-model="report.description"></textarea>
          </div>
        </div>
        <div class="detail-item">
          <span>诊断结论:</span>
          <div class="expandingArea">
              <pre>{{report.diagnosticsConclusion}}<br></pre>
              <textarea disabled placeholder="" v-model="report.diagnosticsConclusion"></textarea>
          </div>
          <!-- <p>
            {{report.diagnosticsConclusion}}
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getReportDetail } from '@/services/report'
export default {
  name: 'InspectReportDetail',
  data () {
    return {
      reportId: '',
      name: '检查报告详情',
      report: {}
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
        report_type: 'inspect_report'
      }
      getReportDetail(obj).then(res => {
        if (res.report) {
          console.log(res.report)
          console.log('==============')
          this.report = res.report
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
      font-size: 1rem;
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
      >span{
        display: block;
        height: 2rem;
        line-height: 2rem;
        overflow: hidden;
        text-align: left;
        font-weight: bold;
      }
      >p{
        text-align: left;
          text-indent: 2;
      }

      .expandingArea{
        width: 100%;
        position:relative;
        pre{
          width: 100%;
          display:block;
          visibility:hidden;
          white-space: pre-wrap;
          word-wrap: break-word;
          color: #2c3e50;
          font-size: 1.2rem;
        }
        textarea{
          width: 100%;
          position:absolute;
          top:0;
          left:0;
          height:100%;
          color: #2c3e50;
          font-size: 1rem;
          outline: none;
          border: none;
          background: #fff;
          &:disabled{
            color: #2c3e50 !important;
            -webkit-text-fill-color: #2c3e50;
            -webkit-opacity: 1;
          }
        }
      }
    }
  }
}
</style>
