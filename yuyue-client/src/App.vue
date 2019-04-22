<template>
  <div id="app">
    <div v-wechat-title="$route.meta.title"></div>
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { getCode } from '@/common/wechatsdk'
import { loadWechatInfo } from '@/services/wechat'
import { checkMemberInfo } from '@/services/member'
export default {
  name: 'App',
  // 在mounted阶段通过cookie拿到用户的userid
  created () {
    if (this.$store.state.wechatInfo) { // 重复返回首页时不再请求数据
      return
    }

    var urlParams = this.getUrlParmas()
    if (!urlParams.code) { // 去授权获取code
      alert('no code!')
      let url = window.location.href
      getCode(url)
    } else {
      alert('has code')
      loadWechatInfo({code: urlParams.code}).then(res => {
        if (res.wechat_info) {
          // alert('wechatInfo:', JSON.stringify(res.wechat_info))
          this.setWechatInfo(res.wechat_info)
          // alert('app:' + JSON.stringify(this.$store.state.wechatInfo))
          checkMemberInfo({open_id: res.wechat_info.openid}).then(res => {
            // alert('result:', res)
            if (res.member) {
              // alert('has member')
              this.setMemberInfo(res.member)
            } else {
              // alert('no member')
            }
          }, err => {
            console.error(err)
          })
        }
      })
    }
  },
  methods: {
    ...mapMutations({
      setWechatInfo: 'SET_WECHATINFO',
      setMemberInfo: 'SET_MEMBERINFO'
    }),
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
