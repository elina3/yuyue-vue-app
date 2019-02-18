<template>
  <div>
     <div class="date-filter-area">
       <span>{{currentClickDate && currentClickDate.Format('yyyy-MM-dd')}}</span>
     </div>
     <div class="week-panel">
      <ul>
        <li :class="[item.selected ? 'selected' : '', item.disabled ? 'disabled' : '']" :key="index" v-for="(item, index) in weekDay" @click="clickDate(item)">
          <span>{{item.name}}</span>
          <span class="date-string" :class="item.now ? 'today' : ''">{{item.dateNumber}}</span>
        </li>
      </ul>
     </div>
  </div>
</template>

<script>
export default {
  props: [
    'initDates'
  ],
  data () {
    return {
      filterDate: new Date(),
      currentClickDate: null,
      todayString: new Date().Format('yyyy-MM-dd'),
      weekDay: this.initDates
    }
  },
  methods: {
    clickDate (dateItem) {
      if (dateItem.disabled) {
        return
      }
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
    sure (value) {
      // alert(value)
      this.refreshBoard(value)
    },
    isToday (newDate) {
      return newDate.Format('yyyy-MM-dd') === this.todayString
    },
    refreshBoard () {
      const weekNames = ['日', '一', '二', '三', '四', '五', '六']
      // this.weekDay = [
      //   {date: new Date('2019-2-17')},
      //   {date: new Date('2019-2-18'), disabled: true},
      //   {date: new Date('2019-2-19')},
      //   {date: new Date('2019-2-20')},
      //   {date: new Date('2019-2-21')},
      //   {date: new Date('2019-2-22')},
      //   {date: new Date('2019-2-23')},
      //   {date: new Date('2019-2-24')},
      //   {date: new Date('2019-2-25')}
      // ]
      for (let i = 0; i < this.weekDay.length; i++) {
        this.weekDay[i].dateNumber = this.weekDay[i].date.Format('d')
        this.weekDay[i].name = weekNames[this.weekDay[i].date.getDay()]
        if (this.currentClickDate) {
          if (this.weekDay[i].date.Format('yyyy-MM-dd') === this.currentClickDate.Format('yyyy-MM-dd')) {
            this.weekDay[i].selected = true
          }
        }
      }
    }
  },
  mounted () {
    console.log(this.weekDay)
    this.refreshBoard()
    this.clickDate(this.weekDay[0])
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/define';
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
