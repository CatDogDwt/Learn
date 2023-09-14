/**
 * 该文件是整个项目的入口文件
 */
//引入文件
import { createApp } from 'vue'
//引入App组件 他是所有组件的父组件
import App from './App.vue'

createApp(App).mount('#app')

//创建Vue实例对象---vm 旧版本
// new Vue({
//     //将app组件放入容器中
//     render: h => h(App),//render 
// }).$mount('app')
