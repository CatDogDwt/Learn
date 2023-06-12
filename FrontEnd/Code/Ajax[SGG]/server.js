const express = require('express');

const app = express();

//GET
app.get('/server', (req, res) => {
    //设置响应头 --> 允许跨域 CORS
    res.setHeader('Access-Control-Allow-Origin', '*');//设置响应头 *为通配符 代表全部 可单独设置url地址
    //设置响应体
    res.send('AJAX GET')
})

//POST
app.post/*all*/('/server', (req, res) => {
    //设置响应头 --> 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    //设置允许自定义响应头（一般是后端完成 需要将请求方法改成all）
    res.setHeader('Access-Control-Allow-Headers', '*');
    //设置请求方法
    res.setHeader('Access-Control-Allow-Method', '*');
    //设置响应体
    res.send('AJAX POST')
})

//JSON
app.get('/json-server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //响应一个数据
    const data = {
        name: 'Rikka',
        age: 16,
        gender: 'female'
    }
    //由于send方法只能接受buffer和字符串 所以需要对象进行转换
    let str = JSON.stringify(data)
    //设置响应体
    res.send(str)
})

//IE
app.get('/ie', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('IE缓存');
})

//延时响应
app.get('/delay', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        res.send('延时响应');
    }, 3000);
})

//jQuery
app.get('/jQueryGet', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const data = { name: 'Rikka' }
    res.send(JSON.stringify(data));
})

app.post('/jQueryPost', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('jQuery-Post');
})

app.all('/jQueryServer', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //设置允许自定义响应头（一般是后端完成 需要将请求方法改成all）
    res.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'Zelda' }
    res.send(JSON.stringify(data));
})

app.all('/AxiosServer', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //设置允许自定义响应头（一般是后端完成 需要将请求方法改成all）
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.send();
})

//fetch
app.all('/FetchServer', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //设置允许自定义响应头（一般是后端完成 需要将请求方法改成all）
    res.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'Zelda' }
    res.send(JSON.stringify(data));
})

//JSONP
app.all('/JsonpServer', (req, res) => {
    const data = {
        name: 'Rikka'
    }
    let str = JSON.stringify(data);
    res.end(`handle(${str})`)
})

//跨域
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/12_跨域.html');
})
app.get('/data', (req, res) => {
    res.send('用户数据');
})

//用户名检测是否存在
app.get('/check-username', (req, res) => {
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    }
    let str = JSON.stringify(data);
    res.send(`handle(${str})`)
})

//jQuery JSONP
app.get('/jQueryJSONP', (req, res) => {
    const data = {
        name: 'Rikka'
    }
    let str = JSON.stringify(data);
    //接受callback参数
    let cb = req.query.callback
    res.send(`${cb}(${str})`)
})


app.listen('3000', () => {
    console.log('服务已启动');
})