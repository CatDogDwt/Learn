/**
 * 模板引擎是分离用户界面和业务数据的一种技术（分离HTML和服务端JS）
 * EJS是一个高效的JS模板引擎 https://ejs.co/     https://ejs.bootcss.com/
 * <%在此标记中可以写JS语法 在ejs内部会解析标记并执行js代码%>
 */
const ejs = require('ejs');
const fs = require('fs');

//字符串
let str1 = 'I Love';
let str2 = 'You';

//声明变量
let str = fs.readFileSync('./01_EJS.html').toString();
//使用ejs渲染拼接字符串
// let result = ejs.render(str, { str1: str1, str2: str2 });
let result = ejs.render(str, { str1, str2 });//简写

console.log(result);