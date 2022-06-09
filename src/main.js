import Vue from 'vue'
import App from './App.vue'
import http from './utils/http'
import router from './route'
import mixin from './views/home/store/mixin'
import './views/home/store/eventBus'
import * as echarts from 'echarts'
Vue.config.productionTip = false

Vue.prototype.$http = http

Vue.prototype.$echarts = echarts
Vue.mixin(mixin)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
