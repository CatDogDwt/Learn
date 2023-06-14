//读取resource文件夹下的content文件的内容
const fs = require('fs');

//回调函数形式
fs.readFile('./resource/content.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

//promise形式
const p = new Promise((resolve, reject) => {
    fs.readFile('./resource/content.txt', (err, data) => {
        if (err) reject(err);
        resolve(data);
    })
})

p.then((value) => {
    console.log(value.toString());
}, (reason) => {
    console.log(reason);
})