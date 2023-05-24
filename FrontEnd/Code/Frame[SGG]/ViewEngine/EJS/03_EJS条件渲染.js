/**
 * 通过isLogin决定最终的输出内容
 * true 输出 <span>欢迎回来</span>
 * false 输出 <button>登录</button> <button>注册</button>
 */

//原生js
let isLogin = true;

if (isLogin) {
    console.log("<span>欢迎回来</span>");
} else {
    console.log('<button>登录</button> <button>注册</button>');
}

//EJS条件渲染
const ejs = require('ejs');
const fs = require('fs');

let html = fs.readFileSync('./03_EJS条件渲染.html').toString();

let result = ejs.render(html, { isLogin });

console.log(result);