<template>
  <div id="app">
    <div v-wechat-title="$route.meta.title"></div>
    <router-view/>
  </div>
</template>

<script>
import { test2 } from '@/common/wechatsdk'
import { getWechatInfo } from '@/services/wechat'
export default {
  name: 'App',
  // 在mounted阶段通过cookie拿到用户的userid
  mounted () {
    // alert('mounted 1')
    var urlParams = this.getUrlParmas()
    // alert(urlParams)
    // alert('?????????')
    // alert(urlParams.code)

    if (!urlParams.code) {
      // alert('window.location.href:', window.location.href)
      let url = window.location.href
      // let url = window.location.href.replace('#/', '')
      // url = url.replace('#', '')
      // alert(url)
      test2(url)
    } else {
      alert('has code' + urlParams.code)
      getWechatInfo({code: urlParams.code}).then(res => {
        let s = JSON.stringify(res)
        alert(s)
      }, err => {
        alert('get wechat info faild:' + err)
      })
    }
  },
  methods: {
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
      alert(obj)
      alert('-------')
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
