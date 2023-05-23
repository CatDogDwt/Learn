/**
 * 图片防盗链 防止外部网站盗用本网站资源
 */

const express = require('express');

const app = express();

//通过localhost和127.0.0.1学习
app.use((req, res, next) => {
    //检测请求头中的referer是否为127.0.0.1
    let referer = req.get('referer');
    if (referer) {
        let url = new URL(referer);
        //获取hostname
        let hostname = url.hostname;
        console.log(hostname);
        if (hostname !== '127.0.0.1') {
            res.status(404);
            res.send('404 NOT FOUND');
            return;
        }
    }
    next();
})

app.use(express.static(__dirname + '/05_public'));

app.listen('9000', () => {
    console.log("start 9000");
})