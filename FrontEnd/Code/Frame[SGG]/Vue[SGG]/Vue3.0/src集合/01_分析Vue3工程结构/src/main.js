//引入的不再是Vue构造函数 引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
//创建应用实例对象并挂载-app(类似于vue2中的vm，但app比vm更‘轻’)
createApp(App).mount('#app')

//拆分
// const app = createApp(App)
// app.mount('#app')




//2.0
// new Vue({
//     render: h => h(App),
//   }).$mount('#app')
