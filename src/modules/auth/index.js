'use strict';
import Vue from 'vue';
import Mint from 'mint-ui';
import "mint-ui/lib/style.css";
import App from './views/app.vue';
import Api from 'components/services/api';
Vue.use(Mint);
Vue.config.debug = true;

console.log('Auth page vue app initial!');

new Vue({
  el: '#auth-app',
  template: '<App />',
  components: {
    App
  }
});


Api.findPostId_100({postId: '2847'}).then(function (resp) {
  console.log('then:');
  console.log(resp);
}).catch(function (resp) {
  console.log('catch:');
  console.log(resp);
})


