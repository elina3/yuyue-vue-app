<template>
  <div class="report-page">
    <div class="report-header">
      <span>当前就诊人：{{name}}</span>
      <!-- <img @click="openPop" src="../../../assets/images/report/datepicker.png"/> -->
    </div>
    <div class="report-item" :key="reportItem.id" v-for="reportItem in reports" @click="goToPage(reportItem.id, '/me/inspect-report-detail')">
      <div class="report-left">
        <span>{{reportItem.name}}</span>
        <span>{{reportItem.report_time}}</span>
      </div>
      <div class="report-right">
          <!-- <time>2019-4-3 10:23:33</time> -->
          <span class="arrow">></span>
      </div>
    </div>
    <date-select-panel :opened="opened" title="日期选择" @onDateSure="onDatePanelSure" @onDateCancel="onDateCancel"></date-select-panel>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { getMyReports } from '@/services/report'
import dateSelectPanel from '../../../components/DateSelectPanel'

export default {
  name: 'Report',
  components: {
    dateSelectPanel
  },
  data () {
    return {
      name: '',
      now: new Date(new Date().Format('yyyy-MM-dd')),
      filter: {
        startDate: null,
        endDate: null
      },
      opened: false,
      reports: []
    }
  },
  created () {
    this.filter.startDate = new Date(this.now.getTime() - 7 * 24 * 60 * 60 * 1000)
    this.filter.endDate = this.now
  },
  mounted () {
    var memberInfo = this.$store.state.memberInfo
    // var memberInfo = {
    //   open_id: 'o7-H2wTS0Zniw2W_mkkFH0scU3u4',
    //   nickname: '郭姗姗'
    // }
    if (memberInfo) {
      this.open_id = memberInfo.open_id
      this.name = memberInfo.nickname
      this.loadMyReports()
    }
  },
  computed: {
    ...mapGetters(['memberInfo']),
    getMemberInfo () {
      return this.$store.state.memberInfo
    }
  },
  watch: {
    getMemberInfo (val) {
      if (val) {
        this.open_id = val.open_id
        this.loadMyReports()
      }
    }
  },
  methods: {
    onDatePanelSure (data) {
      // alert(data.startDate)
      // alert(data.endDate)
      this.filter.startDate = data.startDate
      this.filter.endDate = data.endDate
      this.opened = false
      this.loadMyReports()
    },
    onDateCancel () {
      alert('cancel')
    },
    openPop () {
      this.opened = true
    },
    goToPage (id, baseUrl) {
      this.$router.push({ path: (baseUrl + '/' + id) })
    },
    loadMyReports () {
      let obj = {
        open_id: this.open_id,
        report_type: 'inspect_report',
        start_date: this.filter.startDate,
        end_date: this.filter.endDate
      }
      getMyReports(obj).then(res => {
        if (res.reports) {
          console.log(res.reports)
          this.reports = res.reports.map(item => {
            let timeString = item.reportingTime.replace('-', '/').replace('Z', ' ').replace('T', ' ')// 返回的是通用标准时,new Date()会增加8（我们是+8时区）
            return {
              id: item.id,
              name: item.name,
              report_time: new Date(timeString).Format('yyyy-MM-dd hh:mm:ss')
            }
          })
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
.report-page{
  background: #fff;
  height: 100%;

  .weui-cell__bd p{
    text-align: left !important;
  }
  .report-header{
    height: 3rem;
    span{
      text-align: left;
      display: inline-block;
      float: left;
      line-height: 3rem;
      padding-left: 0.5rem;
    }
    img{
      display: inline-block;
      float: right;
      width: 1.75rem;
      height: 1.75rem;
      padding-right: 0.5rem;
      margin-top: 0.5rem;
    }
  }
  .report-item{
    display: block;
    width: 100%;
    height: 3rem;
    padding: 1rem 0;

    .report-left, .report-right{
      display: inline-block;
      float: left;
      width: 50%;
      height: 100%;
    }
    .report-left{
      >span{
        padding-left: 0.5rem;
        display: block;
        line-height: 1.5rem;
        text-align: left;
      }
    }
    .report-right{
      >span{
        display: block;
        padding-right: 0.5rem;
        float: right;
        line-height: 3rem;
      }
    }
  }
}
</style>
