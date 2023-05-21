//引用http模块
const http = require('http');
//引用fs模块
const fs = require('fs');

//创建http服务
const server = http.createServer((request, response) => {
    //根据请求路径区分返回资源
    let { pathname } = new URL(request.url, 'http://127.0.0.1');
    if (pathname == '/') {
        const html = fs.createReadStream(__dirname + '/HTTP响应练习扩展/html/HTTP响应练习扩展.html');
        html.on('data', chunk => {
            response.end(chunk);
        })
    } else if (pathname == '/css/http.css') {
        const css = fs.createReadStream(__dirname + '/HTTP响应练习扩展/css/http.css');
        css.on('data', chunk => {
            response.end(chunk);
        })
    } else if (pathname == '/js/http.js') {
        const js = fs.createReadStream(__dirname + '/HTTP响应练习扩展/js/http.js');
        js.on('data', chunk => {
            response.end(chunk);
        })
    } else {
        response.statusCode = 404;
        response.end('404 NOT FOUND');
    }
})

//启动http服务
server.listen(9000, () => {
    console.log('服务已启动~9000正在监听~');
})