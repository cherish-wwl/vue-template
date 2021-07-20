import Vue from 'vue'
import App from './App.vue'
import http from './utils/http'
import router from './route'

import './common.scss'

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
