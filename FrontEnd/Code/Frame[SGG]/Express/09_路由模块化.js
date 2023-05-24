/**
 * 路由模块化 项目体积变小 协作更加简便
 */

const express = require('express');
const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter');

const app = express();

app.use(homeRouter);
app.use('/admin',adminRouter);//可以设置路由路径 当访问router中得到路由规则时 会自动添加/admin

app.all('*', (req, res) => {
    res.send('404 NOT FOUND')
})

app.listen('9000', () => {
    console.log('服务已启动9000');
})