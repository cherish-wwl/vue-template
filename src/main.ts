import Vue from 'vue'
import App from './App.vue'
import http from './utils/http'
import router from './route'

Vue.config.productionTip = false
import './components/alert'

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
