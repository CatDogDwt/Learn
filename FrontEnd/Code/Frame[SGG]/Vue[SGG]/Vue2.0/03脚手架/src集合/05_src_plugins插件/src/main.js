//引入Vue
import { createApp } from 'vue'
//引入app
import App from './App.vue'
//引入插件
import plugins from './plugins'

//应用插件
createApp(App).use(plugins)

//创建vm
// new Vue({
//     el: '#app',
//     render: c => c(App)
// })

createApp(App).mount('#app')