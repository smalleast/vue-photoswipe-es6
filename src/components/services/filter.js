import config from './config'
Vue.filter('toQiNiuImg', function (inValue) {
  return inValue ? config.IMG_SERVER + '/' + inValue : '';
});


