/**
 * express是一个基于nodejs平台的极简灵活的WEB应用开发框架(封装好的工具包) 官网 https://www.expressjs.com.cn/
 * 安装
 *      npm i express
 */

//导入express
const express = require('express');
//创建应用对象
const app = express();
//创建路由
app.get('/', (req, res) => {
    res.end('hello express');
})
//监听端口 启动服务
app.listen(9000, () => {
    console.log('服务已启动~9000正在监听~');
})