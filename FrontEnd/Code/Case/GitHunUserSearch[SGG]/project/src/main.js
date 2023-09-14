import Vue from 'vue'
import App from './App.vue'
import vr from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vr)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
