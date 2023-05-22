/**
 * 根据路由参数响应歌手的信息 路径结构/role/id.html 显示动漫角色信息
 */

const express = require('express');

const { role } = require('./03_role.json');//导入json文件 此处通过解构赋值将role转变为数组

const app = express();

app.get('/role/:id.html', (req, res) => {
    let { id } = req.params;

    //在数组中寻找对应id的数据
    let result = role.find(item => {
        if (item.id == Number(id)) {
            return true;
        }
    })

    if (!result) {
        res.statusCode = 404;
        res.end('404 NOT FOUND')
        return;
    }

    res.end(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${result.role_name}</title>
        </head>

        <body>
            <h1>${result.role_name}</h1>
            <h1>${result.role_gender}</h1>
            <img src="./03_role/${result.role_img}">
            <h1>${result.role_star}</h1>
        </body>

        </html>
    `);
})

app.listen('9000', () => {
    console.log('服务已启动！9000正在监听~');
})