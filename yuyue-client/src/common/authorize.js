import {
  test2
} from './wechatsdk'

export function authorize() {
  let urlParams = getUrlParmas();
  let url = window.location.href.replace("#", "");
  let pageString = urlParams["page"];
  if (/mymember/.test(pageString)) {
    test2(url, 1000006);
  } else if (/barank/.test(pageString)) {
    test2(url, 1000007);
  } else if (/myachievement/.test(pageString)) {
    test2(url, 1000008);
  } else {
    alert("没有权限访问！");
  }
}

function getUrlParmas() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&+]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.forEach(item => {
      let tempArr = item.substring(1).split("=");
      let key = decodeURIComponent(tempArr[0]);
      let value = decodeURIComponent(tempArr[1]);
      obj[key] = value;
    });
    return obj;
  }
}

