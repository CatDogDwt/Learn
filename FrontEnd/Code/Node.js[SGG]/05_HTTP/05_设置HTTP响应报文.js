/**
 * 设置响应状态码 response.statusCode
 * 设置响应状态描述 response.statusMessage
 * 设置响应头信息 response.setHeader('name','value')
 * 设置响应体 response.write('') response.end('')
 *      两种使用情况
 *          1.write和end结合使用 响应体相对分散
 *              response.write('');
 *              response.write('');
 *              response.write('');
 *              response.end();每一个请求在处理的时候必须执行end方法
 *          2.单独使用end方法 响应体相对集中
 *              response.end('');
 */

const http = require('http')

const server = http.createServer((request, response) => {
    //设置响应状态码
    response.statusCode = 404;
    //设置响应头
    // response.setHeader('content-type', 'text/html;charset=utf-8')
    // response.setHeader('Server','Node.js')
    response.setHeader('Rikka', 'Mikasa')
    //设置响应体
    // response.end('响应体~')
    response.write('响应体~')
    response.write('响应体~')
    response.write('响应体~')
    response.write('响应体~')
    response.write('响应体~')
    response.end();
});

server.listen(9000, () => {
    console.log('服务已启动...');
})