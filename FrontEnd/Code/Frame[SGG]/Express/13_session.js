const express = require('express');
const app = express();

//通过express-session中间件对session操作
const session = require('express-session');
// 通过connect-mongo连接数据库 将session信息存储到数据库中
const MongoStore = require('connect-mongo');
//设置session中间件
app.use(session({
    name: 'sid',//设置cookie的name 默认值是 connect.sid
    secret: 'went',//参与加密的字符串(又称签名) 加盐
    saveUninitialized: false,//是否为每次请求都设置一个cookie用来存储session的id(记录匿名用户可以设置为true)
    resave: true,//是否在每次请求时重新保存session
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/project'//数据库连接配置
    }),
    cookie: {
        httpOnly: true,//开启后前端无法通过JS操作
        maxAge: 1000 * 300//控制sessionid的过期事件
    },
}))

app.get('/', (req, res) => {
    res.send('home')
})
//设置session
app.get('/login', (req, res) => {
    //在向login传递请求时 需要传递用户名和密码 且两个值必须为admin
    if (req.query.username === 'admin' && req.query.password === 'admin') {
        //设置session信息
        req.session.username = 'admin'
        req.session.uid = '253f688acd'
        //成功响应
        res.send('登陆成功')
    } else {
        res.send('登陆失败')
    }
})
//读取session
app.get('/cart', (req, res) => {
    //检测session是否存在用户数据判断用户登陆状态
    if (req.session.username) {
        //成功响应
        res.send(`已登陆 欢迎您 ${req.session.username}`)
    } else {
        res.send('未登录')
    }
})
//销毁session
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send('退出成功');
    })
})

app.listen('3000');