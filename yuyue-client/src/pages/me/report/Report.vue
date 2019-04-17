<template>
  <div class="report-page">
    <wv-panel>
        <wv-media-box :key="item.id" v-for="item in tabNames"  class="yy-list-item" :thumb='item.icon' :title="item.title" :description="item.description" :to="item.url"></wv-media-box>
    </wv-panel>
  </div>
</template>

<script>
export default {
  name: 'Report',
  data () {
    return {
      name: '',
      tabNames: [{
        title: '检验报告',
        icon: '/client/static/images/report/test.png',
        url: '/me/test-report/list'
      }, {
        title: '检查报告',
        icon: '/client/static/images/report/inspect.png',
        url: '/me/inspect-report/list'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../../assets/css/common';
.report-page {
  .weui-panel .weui-panel__bd .yy-list-item .weui-media-box__bd .weui-media-box__desc{
    display: none;
  }
}
</style>
<style lang="scss" scoped>
.report-page{
  background: #fff;
  height: 100%;
}
</style>
