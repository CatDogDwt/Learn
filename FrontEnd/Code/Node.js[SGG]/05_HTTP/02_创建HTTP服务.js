//导入http模块
const http = require('http')
//创建服务对象
const server = http.createServer((request, response) => {
    //当服务接收到http请求时 回调函数执行
    response.end('Hello HTTP Server')//设置响应体并结束响应
});
//监听端口 启动服务
server.listen(9000, () => {
    //此回调函数会在服务成功启动以后执行
    console.log('服务已启动...');
})
//在浏览器中访问http://127.0.0.1:9000
/**
 * 注意事项
 *      命令行ctrl+c停止服务 
 *      当服务启动后，更新代码必须重启服务才能生效
 *      响应报文中文乱码的解决方法
 *          response.setHeader('content-type','text/html;charset=utf-8');
 *      端口号被占用
 *          Error:listen EADDRINUSE: address already in use :::9000
 *          关闭当前正在运行监听端口的服务(可以通过资源监视器】】关闭)
 *          修改其他端口号
 *      HTTP协议默认端口是80 HTTPS协议默认端口是443 HTTP服务开发常用端口有 3000 8080 8090 9000...
 */