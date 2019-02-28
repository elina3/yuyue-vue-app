/**
 * Created by 18262 on 2017/9/1.
 */
/**
 * [tools 帮助对象 提供公共方法 ]
 * @type {Object}
 */
const tools = {}
//(function() {
/**
 * 可以补充注释
 * @returns {boolean}
 */
tools.isWeiXin = function () {
    return window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger' ? true : false
}
/**
 *
 * @param text
 * @param defaultValue
 * @returns {number|*|Number}
 */
tools.toNumber = function (text, defaultValue) {
    return +text || defaultValue || NaN
}
/**
 *将需要存储的对象存到session中
 * @param key  键
 * @param value  值
 */
tools.setSessionStorage = function (key, value) {
    window.sessionStorage.setItem(key, value)
}
/**
 * 将需要存储的对象存到storage中
 * @param key
 * @param value
 */
tools.setLocalStorage = function (key, value) {
    window.localStorage.setItem(key, value)
}

/**
 * 从session中取出存的值
 * @param key
 */
tools.getSessionStorage = function (key) {
    return window.sessionStorage.getItem(key)
}
/**
 * 从storage中取出存的值
 * @param key
 */
tools.getLocalStorage = function (key) {
    return window.localStorage.getItem(key)
}
/**
 * 将当前键对应的值从session中清除
 * @param key
 */
tools.clearSessionStorage = function (key) {
    window.sessionStorage.removeItem(key)
}
/**
 * 从cookie中取出值
 * @param key
 * @returns {null}
 */
tools.getCookie = function (key) {
    var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return unescape(arr[2]); else return null
}
/**
 * 将需要的对象存储到cookie中
 * @param key
 * @param value
 */
tools.setcookie = function (key, value) {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() + 30 * 60 * 1000);
    document.cookie = key + "=" + value + ";expires=" + expdate.toGMTString() + ";path=/"
}

/**
 * [isUndefined 是否是未定义的]
 * @param  {Anyone}  obj [要判断的参数]
 * @return {Boolean}     [true: 是undefined]
 */
tools.isUndefined = function (obj) {
    return (typeof (obj) == "undefined")
}

/**
 * [isNull 是否是null]
 * @param  {Anyone}  obj [要判断的参数]
 * @return {Boolean}     [true: 是null]
 */
tools.isNull = function (obj) {
    return (obj === null)
}

/**
 * [isValidUrlParam Url参数是否有效]
 * @param  {string}  param [要判断的参数]
 * @return {Boolean}     [true:有效,false:无效]
 */
tools.isValidUrlParam = function(param){
    return param &&  param !== 'undefined' && param !== 'null'
}