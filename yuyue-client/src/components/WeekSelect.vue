<template>
  <div>
     <div class="date-filter-area">
       <span @click="openPicker()">{{filterDate.Format('yyyy-MM-dd')}}</span>
        <wv-datetime-picker
                ref="picker"
                type="date"
                @confirm="sure"
                v-model="filterDate">
            </wv-datetime-picker>
     </div>
     <div class="week-panel">
      <button @click="prevDate()"> <img src="../assets/images/appointment/上页.png"/> </button>
      <ul>
        <li :class="item.selected ? 'selected' : ''" :key="index" v-for="(item, index) in weekDay" @click="clickDate(item)">
          <span>{{item.name}}</span>
          <span class="date-string" :class="item.now ? 'today' : ''">{{item.dateNumber}}</span>
        </li>
      </ul>
      <button  @click="nextDate()"> <img src="../assets/images/appointment/下页.png"/>  </button>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filterDate: new Date(),
      currentClickDate: null,
      todayString: new Date().Format('yyyy-MM-dd'),
      weekDays: [{weekName: '一', dateNumber: '10', date: new Date('2019/1/10'), selected: true}, {weekName: '二', dateNumber: '11', date: new Date('2019/1/11'), selected: false}],
      weekDay: []
    }
  },
  methods: {
    clickDate (dateItem) {
      this.weekDay.forEach(function (item) {
        item.selected = false
      })
      dateItem.selected = true
      this.currentClickDate = dateItem.date
      this.$forceUpdate()
      this.$emit('onClickDate', dateItem.date)
    },
    prevDate () {
      let newDate = new Date(new Date().setDate(this.weekDay[0].date.getDate() - 7))
      this.refreshBoard(newDate)
    },
    nextDate () {
      let newDate = new Date(new Date().setDate(this.weekDay[6].date.getDate() + 7))
      this.refreshBoard(newDate)
    },
    openPicker () {
      this.$refs.picker.open()
    },
    sure (value) {
      // alert(value)
      this.refreshBoard(value)
    },
    isToday (newDate) {
      return newDate.Format('yyyy-MM-dd') === this.todayString
    },
    refreshBoard (newDate) {
      this.weekDay = [{name: '日'}, {name: '一'}, {name: '二'}, {name: '三'}, {name: '四'}, {name: '五'}, {name: '六'}]
      let theDateIndex = newDate.getDay()
      for (let i = 0; i < 7; i++) {
        if (i < theDateIndex) {
          //  筛选的这天之前
          this.weekDay[i].date = new Date(new Date().setDate(newDate.getDate() - (theDateIndex - i)))
        } else if (i > theDateIndex) {
          //  筛选的这天之后
          this.weekDay[i].date = new Date(new Date().setDate(newDate.getDate() + (i - theDateIndex)))
        } else {
          //  筛选出的这一天
          this.weekDay[i].date = new Date(newDate.Format('yyyy-MM-dd'))
        }
        //  标记面板的今天
        this.weekDay[i].now = this.isToday(this.weekDay[i].date)
        this.weekDay[i].dateNumber = this.weekDay[i].date.Format('d')
        if (this.currentClickDate) {
          if (this.weekDay[i].date.Format('yyyy-MM-dd') === this.currentClickDate.Format('yyyy-MM-dd')) {
            this.weekDay[i].selected = true
          }
        }
      }
    }
  },
  mounted () {
    this.filterDate = new Date()
    this.refreshBoard(this.filterDate)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/define';
.week-panel{
  button, ul{
    display: inline-block;
    float: left;
    height: 3rem;
  }
  button{
    width: 5%;
    background: $color-green;
    color: #fff;
    border: none;
    img{
      display: block;
      width: 80%;
      height: auto;
      margin: 0 auto;
    }
  }
  ul{
    width: 90%;
  }
  ul li{
    display: inline-block;
    float: left;
    width: 14%;
    height: 100%;
    text-decoration: none;
    span{
      display: block;
    }
    span.today{
      color: red;
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
