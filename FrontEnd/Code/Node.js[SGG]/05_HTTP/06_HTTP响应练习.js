//引用http模块
const http = require('http');
//引用fs模块
const fs = require('fs');

//创建http服务
const server = http.createServer((request, response) => {
    const html = fs.createReadStream(__dirname + '/HTTP响应练习.html')
    html.on('data', chunk => {
        response.end(chunk);
    })
})

//启动http服务
server.listen(9000, () => {
    console.log('服务已启动~9000正在监听~');
})