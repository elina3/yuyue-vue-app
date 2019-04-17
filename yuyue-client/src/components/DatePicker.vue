<template>
  <div v-show="opened">
     <div class="date-title"><span class="left" @click="cancel">取消</span><p>{{title}}日期选择</p><span class="right" @click="sure">确定</span></div>
     <div class="date-select-area">
         <ul class="date-select-wrapper">
            <li class="date-select-item">
                <label :class="currentYear ? 'has-value' : ''" @click="openYearOptions">{{currentYear ? currentYear.name : '----年'}}</label>
                <ul class="date-item-options" v-show="yearOptionsOpened">
                    <li :class="item.selected ? 'selected' : ''" @click="selectYear(item)" :key="item.value" v-for="item in years">{{item.name}}</li>
                </ul>
            </li>
            <li class="date-select-item">
                <label :class="currentMonth ? 'has-value' : ''"  @click="openMonthOptions">{{currentMonth ? currentMonth.name : '--月'}}</label>
                <ul class="date-item-options" v-show="monthOptionsOpened">
                    <li :class="item.selected ? 'selected' : ''" @click="selectMonth(item)" :key="item.value" v-for="item in months">{{item.name}}</li>
                </ul>
            </li>
            <li class="date-select-item">
                <label :class="currentDay ? 'has-value' : ''"  @click="openDayOptions">{{currentDay ? currentDay.name : '--日'}}</label>
                <ul class="date-item-options" v-show="dayOptionsOpened">
                    <li :class="item.selected ? 'selected' : ''" @click="selectDay(item)" :key="item.val" v-for="item in days">{{item.name}}</li>
                </ul>
            </li>
         </ul>
     </div>
  </div>
</template>

<script>
export default {
  props: [
    'opened',
    'title'
  ],
  data () {
    return {
      currentYear: null,
      currentMonth: null,
      currentDay: null,
      years: [],
      months: [],
      days: [],
      monthDaysDic: [],
      yearOptionsOpened: false,
      monthOptionsOpened: false,
      dayOptionsOpened: false
    }
  },
  methods: {
    sure () {
      if (!this.currentYear || !this.currentMonth || !this.currentDay) {
        return
      }
      let currentDateString = this.currentYear.value.toString() + '/' + this.currentMonth.value.toString() + '/' + this.currentDay.value.toString()
      this.$emit('onDateSure', new Date(currentDateString))
    },
    cancel () {
      this.$emit('onDateCancel')
    },
    openYearOptions () {
      this.yearOptionsOpened = true
      this.monthOptionsOpened = false
      this.dayOptionsOpened = false
    },
    openMonthOptions () {
      this.monthOptionsOpened = true
      this.yearOptionsOpened = false
      this.dayOptionsOpened = false
    },
    openDayOptions () {
      this.dayOptionsOpened = true
      this.monthOptionsOpened = false
      this.yearOptionsOpened = false
    },
    selectYear (item) {
      if (item.selected) {
        return
      }
      this.years.forEach(year => {
        year.selected = false
      })
      item.selected = true
      this.currentYear = item
      this.currentMonth = null
      this.currentDay = null
      this.yearOptionsOpened = false
      this.loadMonths()
    },
    selectMonth (item) {
      if (item.selected) {
        return
      }
      this.months.forEach(month => {
        month.selected = false
      })
      item.selected = true
      this.currentMonth = item
      this.currentDay = null
      this.monthOptionsOpened = false
      this.loadDays()
    },
    selectDay (item) {
      if (item.selected) {
        return
      }
      this.days.forEach(day => {
        day.selected = false
      })
      item.selected = true
      this.currentDay = item
      this.dayOptionsOpened = false
    },
    loadYears () {
      let year = new Date().getFullYear()
      this.years = []
      for (var i = 0; i < 20; i++) {
        let val = year - i
        this.years.push({
          name: val + '年',
          value: val,
          selected: false
        })
      }
    },
    loadMonths () {
      if (!this.currentYear) {
        return
      }
      this.months = []
      for (var i = 12; i > 0; i--) {
        this.months.push({
          name: i + '月',
          value: i,
          selected: false
        })
      }
    },
    loadDays () {
      if (!this.currentMonth) {
        return
      }
      let dayCount = this.getDayCount()
      this.days = []
      for (var i = dayCount; i > 0; i--) {
        this.days.push({
          name: i + '日',
          value: i,
          selected: false
        })
      }
    },
    getFeburaryDayCount (year) {
      let isLeapYear = false
      if (year % 100 === 0 && year % 400 === 0) {
        isLeapYear = true
      } else if (year % 100 !== 0 && year % 4 === 0) {
        isLeapYear = true
      }
      return isLeapYear ? 29 : 28
    },
    getDayCount () {
      if (!this.currentMonth) {
        return
      }
      let index = this.currentMonth.value - 1
      if (index === 1) {
        return this.getFeburaryDayCount(this.currentYear.value)
      } else {
        return [31, -1, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][index]
      }
    },
    init () {
      this.currentYear = null
      this.loadYears()
    }
  },
  created () {
    this.monthDaysDic = [31, this.getFeburaryDayCount(this.currentYear), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  },
  mounted () {
    this.init()
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
    height: 10rem;
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
