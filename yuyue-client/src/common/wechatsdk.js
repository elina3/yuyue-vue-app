// wechatsdk基本配置
var wechatsdkConfig = {
  appid: 'wxa6210d998dd41246', // 平台appid
  defaultAuthUri: 'https://open.weixin.qq.com/connect/oauth2/authorize', // 默认微信授权URL
  authScope: 'snsapi_userinfo'
}

// 跳转授权地址
// http://datonghao.com/client/
function getAuthorization (url) {
  var authoizedUrl = wechatsdkConfig.defaultAuthUri +
    '?appid=' + wechatsdkConfig.appid +
    '&redirect_uri=' + encodeURIComponent(url) + '&response_type=code&scope=' + wechatsdkConfig.authScope + '&state=STATE&connect_redirect=1#wechat_redirect'

  window.location.replace(authoizedUrl)
}

// 存取授权用户userInfo
export function getCode (url) {
  getAuthorization(url)
}
