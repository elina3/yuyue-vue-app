<template>
  <div>
     <div class="date-filter-area">
       <span>{{currentClickDate && new Date(currentClickDate).Format('yyyy-MM-dd')}}</span>
     </div>
     <div class="week-panel">
      <ul>
        <li :class="[item.selected ? 'selected' : '', item.disabled ? 'disabled' : '']" :key="index" v-for="(item, index) in initDates" @click="clickDate(item)">
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
      todayString: new Date().Format('yyyy-MM-dd')
    }
  },
  methods: {
    clickDate (dateItem) {
      if (dateItem.disabled) {
        return
      }
      this.initDates.forEach(function (item) {
        item.selected = false
      })
      dateItem.selected = true
      this.currentClickDate = dateItem.date
      this.$forceUpdate()
      this.$emit('onClickDate', dateItem)
    },
    prevDate () {
      let newDate = new Date(new Date().setDate(this.initDates[0].date.getDate() - 7))
      this.refreshBoard(newDate)
    },
    nextDate () {
      let newDate = new Date(new Date().setDate(this.initDates[6].date.getDate() + 7))
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
      for (let i = 0; i < this.initDates.length; i++) {
        var date = new Date(this.initDates[i].date)
        this.initDates[i].dateNumber = date.Format('d')
        this.initDates[i].name = weekNames[date.getDay()]
        if (this.currentClickDate) {
          if (date.Format('yyyy-MM-dd') === new Date(this.currentClickDate).Format('yyyy-MM-dd')) {
            this.initDates[i].selected = true
          }
        }
      }
    },
    init () {
      this.refreshBoard()
      if (this.initDates[0]) {
        this.clickDate(this.initDates[0])
      }
    }
  },
  watch: {
    initDates: {
      handler (newV, oldV) {
        this.$nextTick(() => {
          this.init()
        })
      },
      deep: true
    }
  },
  mounted () {
    this.init()
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
