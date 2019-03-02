<template>
  <div id="app">
    <div v-wechat-title="$route.meta.title"></div>
    <router-view/>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { getCode } from '@/common/wechatsdk'
import { loadWechatInfo } from '@/services/wechat'
export default {
  name: 'App',
  // 在mounted阶段通过cookie拿到用户的userid
  mounted () {
    var urlParams = this.getUrlParmas()
    if (!urlParams.code) { // 去授权获取code
      let url = window.location.href
      getCode(url)
    } else {
      alert('has code' + urlParams.code)
      loadWechatInfo({code: urlParams.code}).then(res => {
        this.setWechatInfo(res)
        alert('set wechat info---')
        alert('wechatInfo:' + JSON.stringify(this.wechatInfo))
      }, err => {
        alert('get wechat info faild:' + err)
      })
    }
  },
  methods: {
    ...mapMutations({
      setWechatInfo: 'SET_WECHATINFO'
    }),
    ...mapGetters(['wechatInfo']),
    // 拿到传递的参数
    getUrlParmas () {
      let url = window.location.search
      let obj = {}
      let reg = /[?&][^?&]+=[^?&+]+/g
      let arr = url.match(reg)
      if (arr) {
        arr.forEach(item => {
          let tempArr = item.substring(1).split('=')
          let key = decodeURIComponent(tempArr[0])
          let value = decodeURIComponent(tempArr[1])
          obj[key] = value
        })
      }
      return obj
    }
  }
}
</script>

<style>
html, body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #efeef5;
  min-height: 100%;
}
</style>
