/**
 * path模块提供了操作路径的功能
 * 常用API
 *      path.resolve 拼接规范的绝对路径
 *      path.sep 获取操作系统的路径分隔符
 *      path.parse 解析路径并返回对象
 *      path.basename 获取路径的基础名称
 *      path.dirname 获取路径目录名
 *      path.extname 获得路径的扩展名
 */

const fs = require('fs')
const path = require('path')

console.log(__dirname + '/index.html');
//path.resolve
console.log(path.resolve(__dirname + '/index.html'));
console.log(path.resolve(__dirname, 'index.html'));
// path.sep
console.log(path.sep);//windows \ Linux /
// path.parse
console.log(path.parse(__filename)); //__filename 文件的绝对路径
// path.basename
console.log(path.basename(__filename));
// path.dirname
console.log(path.dirname(__filename));
// path.extname
console.log(path.extname(__filename));