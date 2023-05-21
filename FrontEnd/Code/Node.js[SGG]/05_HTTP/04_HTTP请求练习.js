//导入http模块
const http = require('http');
//创建服务对象
const server = http.createServer((request, response) => {
    //设置字符集
    response.setHeader('content-type', 'text/html;charset=utf-8')
    //获取请求的方法
    let { method } = request//解构赋值
    //获取请求的url路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')
    //判断页面与请求方法
    if (method == 'GET' && pathname == '/login') {
        response.end('登陆页面');
    } else if (method == 'GET' && pathname == '/reg') {
        response.end('注册页面');
    }else{
        response.end('NOT FOUND')
    }

})
//监听端口 启动服务
server.listen(9000, () => {
    console.log("服务已启动~端口号9000~监听中...");
})
