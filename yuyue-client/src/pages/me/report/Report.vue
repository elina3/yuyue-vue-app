<template>
  <div class="report-page">
    <wv-tabs @click="onClick">
      <wv-tab :key="item.key" v-for="item in tabNames" :title="item.title">
        <div v-show="item.key === '1'" class="report-item" @click="goToPage(1)">
          <div class="report-left">
            <span>在职体检检查</span>
            <span>201286524293234</span>
          </div>
          <div class="report-right">
              <time>2019-4-3 10:23:33</time>
              <span class="arrow">></span>
          </div>
        </div>
        <div v-show="item.key === '2'" class="report-item">
          <div class="report-left">
            <span>胸部检查</span>
            <span>201286524293234</span>
          </div>
          <div class="report-right">
              <time>2019-4-3 10:23:33</time>
              <span class="arrow">></span>
          </div>
        </div>
      </wv-tab>
    </wv-tabs>
  </div>
</template>

<script>

export default {
  name: 'Report',
  data () {
    return { tabNames: [{
      title: '检验报告',
      key: '1'
    }, {
      title: '检查报告',
      key: '2'
    }] }
  },
  methods: {
    onClick (index) {
      // this.$toast.text(`点击 ${index}`)
    },
    goToPage (id) {
      this.$router.push({ path: ('/me/report-detail/' + id) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.report-page{
  background: #fff;
  height: 100%;

  .report-item{
    display: block;
    width: 100%;
    height: 3rem;
    padding: 1rem 0.5rem;

    .report-left, .report-right{
      display: inline-block;
      float: left;
      width: 50%;
      height: 100%;
    }
    .report-left{
      >span{
        display: block;
        line-height: 1.5rem;
        text-align: left;
      }
    }
    .report-right{
      >span{
        line-height: 3rem;
        text-align: right;
        padding-left: 0.25rem;
      }
    }
  }
}
</style>
