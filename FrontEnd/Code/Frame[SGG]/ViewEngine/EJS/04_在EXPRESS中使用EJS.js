const express = require('express');
const path = require('path');

const app = express();

//设置所用模板引擎为ejs 还有其他的模板引擎 例如 pug twing
app.set('view engine', 'ejs');
//设置模板文件的存放位置 模板文件是具有模板语法内容的文件
app.set('views', path.resolve(__dirname + '/views'));

app.get('/index', (req, res) => {
    //声明变量
    let wife = ['Rikka', 'Mikasa', 'Mifa', 'Zelda'];
    //render 响应 res.render('模板文件名',{数据})
    res.render('index.ejs', { wife });
})

app.listen('9000', () => {
    console.log('start 9000');
})