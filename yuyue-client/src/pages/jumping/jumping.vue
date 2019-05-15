<template>
  <div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { getCode } from '@/common/wechatsdk'
import { loadWechatInfo } from '@/services/wechat'
import { checkMemberInfo } from '@/services/member'
export default {
  name: 'jumping',
  // 在mounted阶段通过cookie拿到用户的userid
  created () {
    var urlParams = this.getUrlParmas()
    alert('urlParams:' + JSON.stringify(urlParams))
    if (!urlParams.code) { // 去授权获取code
      let url = window.location.href
      alert('url:' + url)
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
              alert('has member')
              this.setMemberInfo(res.member)
              let pageName = urlParams.pageName || '/'
              alert('pageName:' + pageName)
              alert('url:' + window.location.href)
              this.$router.push({ path: '/' })
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
      alert('array:' + arr.join(','))
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
