<template>
  <div v-show="opened">
    <wv-popup :visible.sync="opened" height="100%">
      <div class="date-title"><span class="left" @click="cancel">取消</span><p>{{title}}日期选择</p><span class="right" @click="sure">确定</span></div>
      <div class="date-select-area">
        <wv-group>
          <wv-radio :title="title" v-model="filter.value" :options="filter.options"></wv-radio>
          <wv-cell title="开始时间" :value="filter.startDate.Format('yyyy-MM-dd')" v-show="filter.value === 'custom'" @click="onStartDateChange"/>
          <wv-cell title="结束时间" :value="filter.endDate.Format('yyyy-MM-dd')" v-show="filter.value === 'custom'" @click="onEndDateChange"/>
          <date-picker :opened="startOpened" title="开始日期" @onDateSure="onStartDateSure" @onDateCancel="onStartDateCancel"></date-picker>
          <date-picker :opened="endOpened" title="结束日期" @onDateSure="onEndDateSure" @onDateCancel="onEndDateCancel"></date-picker>
      </wv-group>
      </div>
    </wv-popup>
  </div>
</template>

<script>
import { Toast } from 'we-vue'
import datePicker from './DatePicker'
export default {
  props: [
    'opened',
    'title'
  ],
  components: {
    datePicker
  },
  data () {
    return {
      startOpened: false,
      endOpened: false,
      filter: {
        value: 'rencentOneWeek',
        startDate: new Date(),
        endDate: new Date(),
        options: [{
          label: '最近一周',
          value: 'rencentOneWeek'
        }, {
          label: '最近30天',
          value: 'recentOneMonth'
        }, {
          label: '最近90天',
          value: 'recentThreeMonth'
        }, {
          label: '自定义',
          value: 'custom'
        }]
      }
    }
  },
  methods: {
    sure () {
      if (this.filter.value === 'custom' && (!this.filter.startDate || !this.filter.endDate)) {
        return Toast.text({
          duration: 1000,
          message: '请必须选择开始日期和结束日期'
        })
      }
      var end = new Date(new Date().Format('yyyy-MM-dd'))
      var start = end
      if (this.filter.value === 'custom') {
        start = this.filter.startDate
        end = this.filter.endDate
      } else if (this.filter.value === 'rencentOneWeek') {
        start = new Date(end.getTime() - 7 * 24 * 60 * 60 * 1000)
      } else if (this.filter.value === 'recentOneMonth') {
        start = new Date(end.getTime() - 30 * 24 * 60 * 60 * 1000)
      } else if (this.filter.value === 'recentThreeMonth') {
        start = new Date(end.getTime() - 90 * 24 * 60 * 60 * 1000)
      }

      console.log('start:', start.Format('yyyy-MM-dd'))
      console.log('end:', end.Format('yyyy-MM-dd'))
      if (end.getTime() - start.getTime() < 0) {
        return Toast.text({
          duration: 1000,
          message: '结束日期不得早于开始日期'
        })
      }
      this.$emit('onDateSure', {
        startDate: start,
        endDate: end
      })
    },
    cancel () {
      this.$emit('onDateCancel')
    },
    onStartDateChange () {
      this.startOpened = true
    },
    onEndDateChange () {
      this.endOpened = true
    },
    onStartDateSure (date) {
      this.filter.startDate = date
      this.startOpened = false
    },
    onEndDateSure (date) {
      this.filter.endDate = date
      this.endOpened = false
    },
    onStartDateCancel () {
      this.startOpened = false
    },
    onEndDateCancel () {
      this.endOpened = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/define';
.date-title{
    display: block;
    overflow: hidden;
    padding: 0 0.5rem;
    background: #fff;
    >span{
        width: 33.3%;
        display: inline-block;
        float: left;
        line-height: 3rem;
        &.left{
            text-align: left;
        }
        &.right{
            text-align: right;
            color: $color-green;
        }
    }
    >p{
        display: inline-block;
        float: left;
        text-align: center;
        width: 33.3%;
        line-height: 3rem;
    }
}
.date-select-area{
    display: block;
    overflow: hidden;
    // height: 10rem;
    background: #fff;
    padding: 0 0.5rem;
    >ul{
        display: block;
        >li{
            position: relative;
            display: inline-block;
            float: left;
            width: 33.3%;
            height: 2rem;
            line-height: 2rem;

            >label{
                line-height: 10rem;
                &.has-value{
                    color: $color-green;
                }
            }

            >ul{
                position: absolute;
                top: 0;
                width: 100%;
                overflow-y: scroll;
                height: 10rem;
                background: #fff;
                >li{
                    height: 2rem;
                    line-height: 2rem;
                    &.selected{
                        color: $color-green;
                    }
                }
            }
        }
    }
    .weui-cells .weui-cells_radio label .weui-cell__bd p{
      text-align: left;
    }
}
.date-filter-area{
  background: $color-grey-background;
}
.week-panel{
  width: 100%;
  ul{
    width: 100%;
    height: 4rem;
    display: -webkit-box;
    -webkit-overflow-scrolling:touch;
    overflow-x: auto;
    overflow-y: hidden;
  }
  ul li{
    width: 14%;
    height: 90%;
    text-decoration: none;
    list-style: none;
    span{
      display: block;
    }
    span.today{
      color: red;
    }
    &.disabled{
      .date-string{
        color: $font-color-light;
      }
    }
    &.selected{
      .date-string{
        width: 1.5rem;
        margin: 0 auto;
        color: #fff;
        background: $color-green;
        border-radius: 1rem;
      }
    }
  }
}
</style>
