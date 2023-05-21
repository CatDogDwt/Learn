/**
 * 创建http服务 端口为9000 满足以下需求
 * GET /index.html 响应 page/index.html 的文件内容
 * GET /css/app.css 响应 page/css/app.css 的文件内容
 * GET /images/logo.png 响应 page/images/logo.png 的文件内容
 */

const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        response.statusCode = 405;
        response.end('<h1>405 Method Not Allowed</h1>');
        return;
    }
    response.setHeader('content-type', 'text/html;charset=utf-8');
    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    //拼接文件路径
    let filePath = __dirname + '/page' + pathname;
    console.log(pathname);
    //读取文件
    fs.readFile(filePath, (err, data) => {
        if (err) {
            //判断错误代号 https://nodejs.cn/dist/latest-v18.x/docs/api/errors.html
            switch (err.code) {
                case 'ENONET':
                    response.statusCode = 404;
                    response.end('404 NOT FOUND');
                case 'EPERM':
                    response.statusCode = 403;
                    response.end('404 Forbidden');
                default:
                    response.statusCode = 500;
                    response.end('500 Internal Server Error');
            }

            console.log(err);
            return;
        }
        response.end(data);
    })
})

server.listen(9000, () => {
    console.log('服务已启动~9000正在监听~');
})