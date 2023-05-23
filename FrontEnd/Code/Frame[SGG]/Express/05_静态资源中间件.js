/**
 * 静态资源中间件
 *      express.static('静态资源文件夹路径') 返回结果为中间件函数
 *      静态资源文件夹
 *          当服务器根据请求去指定文件夹寻找资源时 此文件夹称为静态资源文件夹
 *      注意：
 *          当浏览器发送请求时 如果浏览器路径为空 那么默认路径为/ 此时会自动获取index.html
 *          如果静态资源和路由规则同时匹配 则谁先匹配谁先响应
 *          一般有路由响应动态资源 静态资源中间件响应静态资源
 */

const express = require('express');

const app = express();

//静态资源中间件的设置
app.use(express.static(__dirname + '/05_public'))

app.get('/home', (req, res) => {
    res.send('主页面')
})

app.listen('9000', () => {
    console.log('9000已启动~');
})