/**
 * HTTP协议
 *      超文本传输协议
 *      协议：
 *          双方必须共同遵守的一组约定
 *      HTTP协议是浏览器与服务器之间遵守的协议
 *      浏览器:请求报文 --请求-->         服务器
 *          请求报文
                请求行
                    请求方法  +  请求URL  +  HTTP协议版本号
                    请求方法
                        GET 主要用于获取数据
                        POST 主要用于新增数据
                        PUT/PATCH 主要用于更新数据
                        DELETE 主要用于删除数据
                        HEAD/OPTIONS/CONNECT/TRACE 使用相对较少
                    请求URL
                        Uniform Resource Locator 统一资源定位符 本身为字符串 用来定位服务器中的资源
                        协议名称 + 主机名     +  路径
                        https  :// www.baidu.com /
                                (域名 也可以是IP地址)
                        
                        https(协议名)://(固定格式)search.js.com(主机名):443(端口号:可以省略)/search(路径:定义服务器中某一资源)?keyword=oneplus&psort=3(查询字符串)
                    HTTP协议版本号
                        当前使用版本号
                请求头
                    由键值对组成 键名：键值
                    记录浏览器信息 交互行为 cookie 和请求体相关的信息...
                    https://developer.mozilla.org/zh-CN/docs/web/HTTP/Headers
                 空行
                请求体
                    约定的任意格式

            例：
                请求行--->   GET https://www.baidu.com/ HTTP/1.1
                        {   Host: www.baidu.com
                        |   Connection: keep-alive
                        |   sec-ch-ua: "Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"
                        |   sec-ch-ua-mobile: ?0
                        |   sec-ch-ua-platform: "Windows"
                        |   Upgrade-Insecure-Requests: 1
                        |   User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.42
                请求头--{    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*//*;q=0.8,application/signed-exchange;v=b3;q=0.7
                        |   Sec-Fetch-Site: none
                        |   Sec-Fetch-Mode: navigate
                        |   Sec-Fetch-User: ?1
                        |   Sec-Fetch-Dest: document
                        |   Accept-Encoding: gzip, deflate, br
                        |   Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
                        {   Cookie: __bid_n=18798eda39a32ec2a74207; BAIDUID=6B80335E771C209CB43FE8E05F8AAEBA:FG=1; newlogin=1; BAIDU_WISE_UID=wapp_1681929464220_10; BDUSS=dSVjNtSE1Xa1pVdE1sU002eUZZQlFwTWlmZWJKdE1CeXh0Z3B2Ry1ndzh-bWhrSVFBQUFBJCQAAAAAAAAAAAEAAAD20RxCbGVtb25kZXJ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxxQWQ8cUFkY0; BDUSS_BFESS=dSVjNtSE1Xa1pVdE1sU002eUZZQlFwTWlmZWJKdE1CeXh0Z3B2Ry1ndzh-bWhrSVFBQUFBJCQAAAAAAAAAAAEAAAD20RxCbGVtb25kZXJ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxxQWQ8cUFkY0; BIDUPSID=6B80335E771C209CB43FE8E05F8AAEBA; PSTM=1682079757; ZFY=5:BIsDai5iGywxB:BOSApCrtkgXcI6:AddFRggjS3Z2vus:C; FPTOKEN=SPPLz8qQvpmqKkgf7728siRhlveRIskgRfHZyHLXA+cVZFWYfM+7JYWMeju7Pd2M9CYsOUbt3n3QgGtKMAZqF4fd/rxw7VSngOj8cuQzPY1Q0uKJdvm69eYD5m8k6hN+91IN/dGph82cZdO1GPqLqmktijnBMvZQPLa9WTqWBuBuwI4U25u/GFcWAs6j41q1QV2fFMlmlGiSS6goqEMYv8ZrfCNCiuG9LkFWzFb+dh5xA+hTO1gQZvpJ8c5i8A7Mk4Nh0E6OLXmdXXMMVwNQbNoudnBU6uIYX6ZJBFCB87bnTu8rshpb4E5EECg6A4BWdTtHZk/EB8JEDaC/lW2f835C6cmVqwoqSfRG8S2a9hLfo3Skrz23xkO17/kCgupV0yiETnxIOArnZsDicVVlVg==|ZvF8jAVsaXM77AM0/L4zPfA0a2nSer+0IhFBFNOao5o=|10|6ea516154178adf99462503ee29f0c70; RT="z=1&dm=baidu.com&si=f76bb5ac-ed26-41e1-bd39-c81d526ddfc9&ss=lhj909ut&sl=m&tt=hed&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ld=4928&ul=4grm&hd=4gsg"; ab_sr=1.0.1_NzlkNDc0NTZiYmQxM2Q2ZWU5Yzk0ZjRjYThmYjAxNTk3ODE2Y2Q0OTlhNTNlYWI2MDE4NWE4YjYyODgwNzAzNGMxYzNhNTIyZTIzNjE5ODk5ZTg1NzViZWYxMmM0OTgzY2MyYTU3ZjI4ZjZlMDcyYmRhNGM2ZGQyZTgxMmJkNTA3MWVmODdlODg0NTcwMzgwY2I3ODI3MjNkZDA5NWYxZGU0MGY5ZmY5ZTU2ZGYwZDU3MmM4ZjZhMDQwNTJiZjg5; BAIDUID_BFESS=6B80335E771C209CB43FE8E05F8AAEBA:FG=1

                请求体--->  '空'

*      浏览器         <--响应-- 响应报文:服务器
*          响应报文
                响应行
                    HTTP协议版本号  +  响应状态码  +  响应状态的描述
                    响应状态码
                        标识响应结果的状态
                        200 请求成功
                        403 禁止请求
                        404 找不到资源
                        500 服务器内部错误
                        ...
                        分类
                            1xx 信息响应
                            2xx 成功响应
                            3xx 重定向响应
                            4xx 客户端错误响应
                            5xx 服务端错误响应
                    响应状态描述
                        大多数情况和响应码保持一致
                        200 OK
                        403 Forbidden
                        404 Not Found
                        500 Internal Server Error
                        ...
                        https://developer.mozilla.org/zh-CN/docs/web/HTTP/Status
                响应头
                    由键值对组成 键名：键值
                    记录响应服务器技术 响应时间 响应体相关...
                 空行
                响应体
                    格式灵活 常见的响应体格式有
                    HTML CSS JS 图片 视频 JSON

           例：
                响应行--->    HTTP/1.1 200 OK
                        {    Bdpagetype: 2
                        |    Bdqid: 0xa9302187001d167a
                        |    Connection: keep-alive
                        |    Content-Security-Policy: frame-ancestors 'self' https://chat.baidu.com https://fj-chat.baidu.com https://hba-chat.baidu.com https://hbe-chat.baidu.com https://njjs-chat.baidu.com https://nj-chat.baidu.com https://hna-chat.baidu.com https://hnb-chat.baidu.com;
                        |    Content-Type: text/html; charset=utf-8
                        |    Date: Sun, 14 May 2023 22:58:20 GMT
                        |    Isprivate: 1
                响应头--{     Server: BWS/1.1
                        |    Set-Cookie: BDSVRTM=290; path=/
                        |    Set-Cookie: BD_HOME=1; path=/
                        |    Set-Cookie: H_PS_PSSID=38515_36546_38529_38469_38613_38468_38591_38597_36806_38485_38195_38638_26350_38620_38543; path=/; domain=.baidu.com
                        |    Strict-Transport-Security: max-age=172800
                        |    Traceid: 1684105100066930637812191281054998140538
                        |    X-Ua-Compatible: IE=Edge,chrome=1
                        {    Content-Length: 465011

                        {   <!DOCTYPE html>
                        |    <html>
                响应体--{       <head></head>
                        |      <body></body>
                        {   </html>

 * IP地址
 *      本身为数字标识 例如 192.168.1.3 本质为32bit的二进制数字 11000000 10101000 00000001 00000011
 *      用来标志网络设备 实现设备通信
 * IP分类
 *      解决IP地址不够用的方法
 *          共享IP
 *              区域共享
 *              家庭共享
 *                  局域网->局域网IP、私网IP
 *                      192.168.0.0 ~ 192.168.255.255
 *                      172.16.0.0 ~ 172.31.255.255
 *                      10.0.0.0 ~ 10.255.255.255        
 *              广域网IP(公网IP)
 *                      除局域网之外的IP
 *          本地回环IP地址
 *              127.0.0.1 ~ 127.255.255.254 始终指向本机
 * 端口
 *      应用程序的数字标识 现代计算机有65536个端口 0~65535 一个应用程序可以使用一个或多个端口
 *      端口可以实现不同主机应用程序之间的通信
*/