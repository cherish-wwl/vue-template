import Vue from 'vue';
import Alert from './alert.vue'
const AlertModel =  {
  install:(vm) => {
    vm.prototype.$alert = (msg) => {
      const instance = new Vue({
        data:{msg},
        render(h) { 
          return h(Alert,{props:{msg}})
        }
      }).$mount()
      document.body.appendChild(instance.$el)
      let timer = setTimeout(() => {
        timer = null
        clearTimeout(timer)
        if(instance.$el) {
          document.body.removeChild(instance.$el)
        }
      },2000) 
    }
  }
}

Vue.use(AlertModel)