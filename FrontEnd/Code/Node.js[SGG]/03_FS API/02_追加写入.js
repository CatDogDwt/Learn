/*
    追加写入
    在文件尾部追加内容
        appendFile
            语法：fs.appendFile(file,data[,options],callback)
        appendFileSync
            语法：appendFileSync(file,data[,options])
    返回值 undefined
*/
const fs = require('fs')

fs.appendFile('./outputFiles/writeFile_fs异步写入.txt', ' ！！！よげ捧を臓心', err => {
    if (err) {
        console.log('追加写入失败');
        return;
    } else {
        console.log('追加写入成功');
    }
})
fs.appendFileSync('./outputFiles/writeFileSync_fs同步写入.txt', ' ！！！よげ捧を臓心')

//补充： writeFile 实现追加写入
fs.writeFile('./outputFiles/writeFile_fs异步写入.txt', '\nwriteFile 实现追加写入', { flag: 'a' }, err => {
    if (err) {
        console.log('写入失败');
    }
    console.log('写入成功');
})