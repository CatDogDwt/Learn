const express = require('express');
const app = express();

const cookieparser = require('cookie-parser');
app.use(cookieparser());

//在express中设置cookie
app.get('/set-cookie', (req, res) => {
    //返回cookie 第一个参数：键名 第二个参数：键值 第三个参数：生命周期（单位毫秒 在报文中是秒 若不设置生命周期 则此cookie会在浏览器关闭时销毁）
    res.cookie('name', 'dwent', { maxAge: 60 * 1000 });
    res.cookie('theme', "red");
    res.send('set-cookie');
})
//在express中删除cookie
app.get('/remove-cookie', (req, res) => {
    res.clearCookie('name');
    res.send('remove-cookie')
})

//在express中使用cookies
app.get('/get-cookie', (req, res) => {
    //获取cookie
    console.log(req.cookies);
    res.send(`欢迎你，${req.cookies.name}[get-cookie]`)
})

app.listen(3000);
