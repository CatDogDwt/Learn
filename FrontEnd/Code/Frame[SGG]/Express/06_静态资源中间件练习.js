//使用静态资源中间件访问HTML+CSS+JS[SGG]/00_PRACTICE下的电影卡片页面

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve('../../HTML+CSS+JS[SGG]/00_PRACTICE/04_电影卡片练习')))

app.listen('9000', () => {
    console.log('---服务已启动 端口号9000 正在监听---');
})