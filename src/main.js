import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible';
// import BaiduMap from 'vue-baidu-map'
Vue.config.productionTip = false
Vue.use(Vant);
// Vue.use(BaiduMap,{
//     ak:"GCVPQtfRaTSyqPvvKpUGwjTbqvoh4un3"
//   });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
