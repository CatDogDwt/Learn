/**
 * 通过request对象获取请求报文
 *      请求方法 request.method
 *      请求版本 request.httpVersion
 *      请求路径 request.url
 *      URL路径 require('url').parse(request.url).pathname
 *      URL查询字符串 require('url').parse(request.url,true).query
 *      请求头 request.headers
 *      请求体 request.on('data',function(chunk){})
 *          request.on('end',function(){})
 * 注意事项
 *      request.url 只能获取路径以及查询字符串 无法获取URL中的域名以及协议内容
 *      request.headers 将请求信息转化成一个对象 并将属性名都转化成了小写
 *      关于路径 如果访问网站的时候 只填写了IP地址或者是域名信息 此时请求的路径为 /
 *      favicon.ico 这个请求是浏览器默认发送的请求
 */
const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8');

    //获取请求方法
    console.log(request.method);

    //获取请求url
    console.log(request.url);//只包含url中的路径和查询字符串

    //获取http协议版本号
    console.log(request.httpVersion);

    //获取请求头
    console.log(request.headers);

    //获取请求头中的某些信息
    console.log(request.headers.host);

    //获取请求路径与查询字符串
    ////解析request.url
    let res = url.parse(request.url, true)//将第二个参数设置为true 会使query变成对象
    console.log(res);
    console.log(res.pathname);
    console.log(res.query.keyword);

    ///获取请求路径与查询字符串2
    /////实例化url对象
    // let url2 = new URL('https://search.bilibili.com/all?keyword=鬼灭之刃');
    let url2 = new URL(request.url, 'http://127.0.0.1');
    console.log(url2);
    console.log(url2.pathname);
    console.log(url2.searchParams.get('keyword'));//map.get

    //获取请求体
    ////1.声明变量
    let body = '';
    ////2.绑定data事件
    request.on('data', chunk => {//获取可读流对象内容 通过chunk一点点取出
        body += chunk;//此处为buffer 作加法运算时会自动将buffer转换为字符串
    })
    ////3.绑定end事件
    request.on('end', () => {
        //当可读流事件结束时 执行end
        console.log(body);
        response.end('你好');
    })
})

server.listen(9000, () => {
    console.log('服务已启动...');
})