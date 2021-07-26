import Vue from 'vue'
import App from './App.vue'
import http from './utils/http'
import router from './route'

import './common.scss'

Vue.config.productionTip = false

Vue.prototype.$http = http
function getRem (pwidth, prem) {
  var html = document.getElementsByTagName('html')[0]
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = oWidth / pwidth * prem + 'px'
}

getRem(1920, 1)
window.onresize = function () {
  getRem(1920, 1)
}
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
