/**
 * express中间件
 *      中间件本质是一个回调函数 中间件可以像路由回调一样访问请求对象 响应对象
 *      中间件的作用是使用函数封装公共操作 简化代码
 * 中间件的类型
 *      全局中间件
 *          每一个请求到达服务端之后都会执行全局中间件函数
 *      路由中间件
 *          一个请求到达服务端后满足某一个路由规则才会执行
 */

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

//使用全局中间件记录每个请求的url和ip地址
let recordMiddleware = function (req, res, next) {
    //获取url和ip
    let { url, ip } = req;
    //保存信息至log中
    fs.appendFile(path.resolve(__dirname, './04_log.txt'), `${url}      ----->      ${ip}\n`, error => {
        if (error) {
            console.log(error);
        }
        console.log('日志已写入');
    })
    //调用next next会调用后续的路由回调
    next();
}

//使用全局中间件函数
app.use(recordMiddleware)

//使用路由中间件 针对/admin /setting的请求 要求URL携带code=521参数 如未携带则提示暗号错误
let checkCodeMiddleware = (req, res, next) => {
    if (req.query.code === '521') {
        next();
    } else {
        res.send('暗号错误')
    }
}

app.get('/home', (req, res) => {
    res.send('前台首页')
})

//使用路由中间件 需要把中间件函数放在受约束的路由回调路径的后边
app.get('/admin', checkCodeMiddleware, (req, res) => {
    res.send('后台首页')
})
app.get('/setting', checkCodeMiddleware, (req, res) => {
    res.send('设置页面')
})
app.all('*', (req, res) => {
    res.send('404 NOT FOUND')
})

app.listen('9000', () => {
    console.log('服务已启动9000');
})