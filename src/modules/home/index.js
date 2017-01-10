import Vue from 'vue';
import Mint from 'mint-ui';
import "components/services/filter";
import "components/services/resolution";
import API from "components/services/api";
import App from './views/app.vue';
import "mint-ui/lib/style.css";
import "components/scss/public.scss";
Vue.use(Mint);
console.log('home -> index.js');
let vm = new Vue({
  el: '#home-app',
  data: {
    swipe: []
  },
  template: '<App :list="swipe" />',
  components: {
    App
  }
});
init();
function init() {
  vm.swipe = [
    "1F42F571-29DA-4391-84C3-23ABBC21EDD7.JPG?imageView/2/w/600",
    "8BDD8AC7-A7B9-4E07-916D-0F1E05C3D7C2.JPG?imageView/2/w/600",
    "83237AE3-07EB-4809-909C-7CBC45CB34FF.JPG?imageView/2/w/600",
    "DBED5F26-84D2-494B-A8ED-3A6CF4E5DABC.JPG?imageView/2/w/600",
    "3788B52C-3321-4E85-A770-58A1A280189C.JPG?imageView/2/w/600",
    "345784fd-0118-490d-ba09-5b72f488dfb7.jpg?imageView/2/w/600",
    "7B6660ED-09B1-46B0-AA22-B6F3B3889834.JPG?imageView/2/w/600"];
}
API.getWeixinShareSign_220({url: window.location.href.split('#')[0]}).then(function (inResp) {
  console.log("weixin+then");
  console.log(inResp);
  wx.config({
    debug: false,
    appId: inResp.appId,
    timestamp: inResp.timestamp,
    nonceStr: inResp.nonceStr,
    signature: inResp.signature,
    jsApiList: ['previewImage']  //把要调用的微信sdk接口全都写到该数组里边
  });


  

}).catch(function (inResp) {
  console.log("weixin+catch");
  console.log(inResp);
})
window.vm = vm;
