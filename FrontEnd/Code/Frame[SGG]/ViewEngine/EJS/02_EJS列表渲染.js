//输出一个ul>li结构 一个名字对应一个li
const wife = ['Rikka', 'Mikasa', 'Mifa', 'Zelda'];

//原生JS
let str = '<ul>';

wife.forEach(item => {
    str += `<li>${item}</li>`
})

str += '</ul>'

console.log(str);

//EJS实现
const ejs = require('ejs');
const fs = require('fs');
let html = fs.readFileSync('./02_EJS列表渲染.html').toString();
let result = ejs.render(html, { wife })
console.log(result);