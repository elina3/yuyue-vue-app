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
    <wv-popup :visible.sync="popupVisible3" height="100%" @close="onHide">
      <wv-group>
        <wv-switch title="关闭" v-model="popupVisible3"/>
        <wv-radio title="日期选择" v-model="filter.value" :options="filter.options" @change="onChange"></wv-radio>
        <wv-cell title="开始时间" :value="filter.startDate.Format('yyyy-MM-dd')" v-show="filter.value === 'custom'" @click="onStartDateChange"/>
        <wv-cell title="结束时间" :value="filter.endDate.Format('yyyy-MM-dd')" v-show="filter.value === 'custom'" @click="onEndDateChange"/>
        <wv-datetime-picker
          ref="picker"
          type="date"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          v-model="filter.startDate">
        </wv-datetime-picker>
        <wv-datetime-picker
          ref="picker2"
          type="date"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          v-model="filter.endDate">
        </wv-datetime-picker>
      </wv-group>
    </wv-popup>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { getMyReports } from '@/services/report'

export default {
  name: 'Report',
  data () {
    return {
      name: '',
      now: new Date(new Date().Format('yyyy-MM-dd')),
      filter: {
        value: 'rencentOneWeek',
        startDate: null,
        endDate: null,
        options: [{
          label: '最近一周',
          value: 'rencentOneWeek'
        }, {
          label: '最近一个月',
          value: 'recentOneMonth'
        }, {
          label: '最近三个月',
          value: 'recentThreeMonth'
        }, {
          label: '最近半年',
          value: 'halfYear'
        }, {
          label: '自定义',
          value: 'custom'
        }]
      },
      popupVisible3: false,
      pickerValue: '',
      tabNames: [{
        title: '检验报告',
        key: '1'
      }, {
        title: '检查报告',
        key: '2'
      }],
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
    onStartDateChange (val) {
      this.$refs.picker.open()
    },
    onEndDateChange (val) {
      this.$refs.picker.open()
    },
    onChange (val) {
      if (val === 'custom') {

      }
    },
    onHide () {
      alert('close')
    },
    onClick (index) {
      console.log('index=======', index)
      this.reports = []
      this.loadMyReports()
    },
    openPop () {
      this.popupVisible3 = true
    },
    goToPage (id, baseUrl) {
      this.$router.push({ path: (baseUrl + '/' + id) })
    },
    loadMyReports () {
      let obj = {
        open_id: this.open_id,
        report_type: 'inspect_report'
      }
      getMyReports(obj).then(res => {
        if (res.reports) {
          console.log(res.reports)
          console.log('==============')
          this.reports = res.reports.map(item => {
            return {
              id: item.id,
              name: item.name,
              report_time: item.reportingTime
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
