<template>
  <div class="report-page">
    <wv-tabs @click="onClick">
      <wv-tab :key="item.key" v-for="item in tabNames" :title="item.title">
        <div v-show="item.key === '1'" class="report-item" @click="goToPage(1)">
          <div class="report-left">
            <span>尿液</span>
            <span>2019-4-3 10:23:33</span>
          </div>
          <div class="report-right">
              <span class="arrow">></span>
          </div>
        </div>
        <div v-show="item.key === '2'" class="report-item">
          <div class="report-left">
            <span>胸部检查</span>
            <span>2019-4-3 10:23:33</span>
          </div>
          <div class="report-right">
              <!-- <time>2019-4-3 10:23:33</time> -->
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
