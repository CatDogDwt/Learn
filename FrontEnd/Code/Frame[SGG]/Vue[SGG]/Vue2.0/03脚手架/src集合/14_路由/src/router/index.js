//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建一个路由器
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'ABOUT',
            path: '/about',
            component: About,
            meta: {
                title: '关于'
            }
        },
        {
            name: 'HOME',
            path: '/home',//一级路由
            component: Home,
            meta: {
                title: '主页'
            },
            children: [//通过children配置子级路由
                {
                    name: 'NEWS',
                    path: 'news',
                    component: News,
                    meta: {
                        title: '新闻',
                        isAuth: false
                    },
                    // beforeEnter: (to, from, next) => {//独享路由守卫
                    //     //和全局前置路由守卫相同但是独享
                    // }
                },
                {
                    name: 'MES',
                    path: 'message',
                    component: Message,
                    meta: {
                        title: '消息',
                        isAuth: false
                    },
                    children: [
                        {
                            name: 'DETAIL',
                            // path:'detail/:id/:message',
                            path: 'detail',
                            component: Detail,
                            meta: {
                                title: '消息-详情'
                            },
                            //props的第一种写法 值为对象 该对象中的所有key:value都会以props的形式传给detail组件 用的比较少
                            // props:{
                            //     a:1,
                            //     b:2
                            // }
                            //props的第二种写法 值为布尔值 若布尔值为真 则会把该路由组件收到的所有params参数 以props形式传给detail组件
                            // props:true
                            //porps的第三种写法 值为函数
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    message: $route.query.message
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫 初始化被调用 每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     console.log(to, from);
//     if (!to.meta.isAuth) { //判断是否需要鉴权
//         // if (to.path === '/home/news' || to.path === '/home/message') {
//         if (to.name === 'NEWS' || to.name === 'MES') {
//             if (localStorage.getItem('name') === 'Rikka') {
//                 next()
//             } else {
//                 alert('权限不足！')
//             }
//         } else {
//             next()
//         }
//     }
// })

//后置路由守卫 初始化被调用 每次路由切换之后被调用
// router.afterEach((to, from) => {
//     document.title = to.meta.title || 'VueRouter'//设置页标题
// })

//暴露路由
export default router

