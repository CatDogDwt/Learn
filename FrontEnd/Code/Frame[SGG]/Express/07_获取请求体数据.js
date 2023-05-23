/**
 * express可以使用body-parser包处理请求体https://www.npmjs.com/package/body-parser
 * 按照要求搭建HTTP服务
 *      GET /login 显示表单网页
 *      POST /login 获取表单中的用户名和密码
 */

const express = require('express');
const bodyParser = require('body-parser');

//解析json格式请求体的中间件
// const jsonParser = bodyParser.json();

//解析querystring格式请求体的中间件
const urlencodeParser = bodyParser.urlencoded({ extended: false });

const app = express();

app.get('/login', (req, res) => {
    //响应表单页面
    res.sendFile(__dirname + '/07_form.html');
});
app.post('/login', urlencodeParser, (req, res) => {
    //获取用户名密码
    console.log(req.body);//当中间件函数urlencodeParser执行完毕之后 会往req中添加属性body
    res.send('登陆成功！')
});

app.listen('9000', () => {
    console.log("---服务已启动 端口号9000 正在监听---");
})