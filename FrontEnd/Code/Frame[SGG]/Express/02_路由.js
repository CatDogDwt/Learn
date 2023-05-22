/**
 * 路由确定了应用程序如何响应客户端对特定端点的请求
 * 路由的组成
 *      请求方法 路径 回调函数
 *      app.<method>(path,callback)
 * 获取请求报文参数
 *      兼容原生获取方式
 *          req.method
 *          req.url
 *          req.httpVersion
 *          req.headers
 *      express获取方式
 *          req.path 获取路径名
 *          req.query 获取查询字符串
 *          req.ip 获取ip地址
 *          req.get('host') 获取指定的请求头
 * express响应设置
 *      兼容原生响应方式
 *          res.statusCode = 404;
 *          res.statuMessage = 'xxx';
 *          res.setHeader('abc','xyz');
 *          res.write('响应体');
 *          res.end('xxx');
 *      express响应方式
 *          res.status(500) 设置响应状态码
 *          res.set('xxx','yyy') 设置响应头
 *          res.send('') 设置响应体(使用此方式中文不会乱码)
 *          res.redirect('https://www.bilibili.com') 重定向
 *          res.download('./package.json') 下载响应
 *          res.json 响应JSON
 *          res.sendFile(__dirname + '/home.html') //响应文件内容
 *      连贯操作
 *          res.status(404).set('xxx','yyy').send('找不到页面了')
 */
//导入express
const express = require('express');
//创建应用对象
const app = express();
//创建get路由
app.get('/GET', (req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);
    //express
    console.log(req.path);
    console.log(req.query);
    console.log(req.ip);
    console.log(req.get('host'));

    res.send("这是GET请求的页面")
    res.end()
})
//创建post路由
app.post('/POST', (req, res) => {
    //获取请求报文参数
    res.send('这是POST请求的页面')
    res.end()
})

//匹配所有方法
app.all('/test', (req, res) => {
    res.end('test test')
})

//404响应
app.all('*', (req, res) => {
    res.end('404 not found')
})

//获取URL路由参数
app.get('/:id.html', (req, res) => {
    console.log(req.params.id);
    res.send('商品详情');
    res.end();
})

//监听端口 启动服务
app.listen(9000, () => {
    console.log('服务已启动~9000正在监听~');
})
