/**
 * Ajax 
 * 异步的js和xml 可以在浏览器中向服务器发送异步请求 也就是在网页不刷新的情况下向服务端发送http请求 得到http响应
 * 最大的优势：无刷新获取数据
 * 优点：
 *      可以无需刷新页面而与服务器端进行通信
 *      允许你根据用户事件来更新部分页面内容
 * 缺点：
 *      没有浏览历史 不能回退
 *      存在跨域问题（同源）
 *      SEO(搜索引擎优化)不友好
 * 使用：
 *  核心对象：
 *      
 * 
 * XML
 * XML可扩展标记语言
 * XML被设计用来传输和存储数据
 * XML和HTML类似 不同的是HTML中都是预定义标签 而XML中没有预定义标签 全都是自定义标签 用来表示一些数据
 * 例如
 *  name:'Rikka';age=16;gender='female'
 *  用XML表示👇
 *  <person>
 *      <name>Rikka</name>
 *      <age>6</age>
 *      <gender>female</gender>
 *  </person>
 * 用JSON表示👇
 * {"name":"Rikka","age":18,"gender":"female"}
 * 
 * HTTP
 * HTTP协议 【超文本传输协议】 协议详细规定了浏览器和万维网服务器之间互相通信的规则
 * 详见Node.js中的05_HTTP中的01_初识HTTP协议与IP
 * 
 * jQuery中的AJAX
 * GET请求
 *  $.get(url,[data],[callback],[type])
 *      url:请求的url地址
 *      data:请求携带的参数
 *      callback:载入成功时回调函数
 *      type:设置返回内容格式,xml,html,script,json,text,_default
 * POST请求
 *  $.post(url,[data],[callback],[type])
 *      url:请求的url地址
 *      data:请求携带的参数
 *      callback:载入成功时回调函数
 *      type:设置返回内容格式,xml,html,script,json,text,_default
 * 通用型请求
 *  $.ajax({
 *      url:,
 *      data:,
 *      type:,
 *      callback:,
 *  })
 *      url:请求的url地址
 *      data:请求携带的参数
 *      callback:载入成功时回调函数
 *      type:设置返回内容格式,xml,html,script,json,text,_default
 * 
 * Axios发送AJAX
 *  https://github.com/axios/axios
 *  
 * 同源策略
 *  同源策略最早由网景公司提出 是浏览器的一种安全策略
 *  同源：协议、域名、端口号 必须完全相同 违背同源策略就是跨域
 * 解决跨域
 *  JSONP
 *      JSONP是一个非官方的跨域解决方案 只支持get请求
 *      工作方式
 *          在网页有一些标签天生具有跨域能力 比如 img link iframe script
 *          JSNOP就是利用script标签的跨域能力来发送请求的
 *          即在前端定义好函数 然后在服务中调用函数来返回结果
 *  CORS
 *      跨域资源共享 CORS是官方的跨域解决方案 它的特点是不需要在客户端做任何特殊操作 完全在服务器中进行处理 支持get和post请求
 *      跨域资源共享标准新增了一组HTTP首部字段 允许服务器声明哪些源站通过浏览器有权限访问哪些资源
 *      CORS通过设置响应头告诉浏览器该请求允许跨域 浏览器收到该响应后就会放行
 *      https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS
 */