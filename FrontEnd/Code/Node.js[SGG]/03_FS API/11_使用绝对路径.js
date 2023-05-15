//在使用相对路径时 如果不在当前文件夹 操作时可能会遇到错误 所以使用绝对路径变量来避免此问题

//绝对路径变量 __dirname 此变量保存的是所在文件的所在目录的绝对路径
console.log(__dirname);

const fs = require('fs')
//程序运行不会随着工作目录的变化而变化
fs.write(__dirname + '/outputFiles/dirname.txt', err => {
    if (err) {
        console.log(err);
    }
    console.log('操作成功');
})
