//引入Vue
import {createApp} from 'vue'
//引入app
import App from './App.vue'
//创建vm
// new Vue({
//     el: '#app',
//     render: c => c(App)
// })
createApp(App).mount('#app')