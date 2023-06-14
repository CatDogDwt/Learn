/**
 * 封装一个函数mineReadFile读取文件内容
 * 参数：path文件路径
 * 返回：promise对象
 */
const fs = require('fs');

let mineReadFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            resolve(data)
        })
    })
}

mineReadFile('./resource/content.txt').then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
})