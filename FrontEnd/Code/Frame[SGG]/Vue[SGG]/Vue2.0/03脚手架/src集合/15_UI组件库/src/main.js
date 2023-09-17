import Vue from 'vue'
import App from './App.vue'
//引入eltui组件库
// import ElementUI from 'element-ui';//太大了 不要直接引入
//引入eltui全部样式
// import 'element-ui/lib/theme-chalk/index.css';//太大了 不要直接引入
//按需引入
import { Button, Row, DatePicker } from 'element-ui';

Vue.config.productionTip = false
//应用eltui
// Vue.use(ElementUI);太大了 不要直接use
//全局注册
// Vue.component(Button.name,Button)
Vue.component('dbtn',Button)//可以自定义组件名
Vue.component(Row.name,Row)
Vue.component(DatePicker.name,DatePicker)

new Vue({
  render: h => h(App),
}).$mount('#app')
