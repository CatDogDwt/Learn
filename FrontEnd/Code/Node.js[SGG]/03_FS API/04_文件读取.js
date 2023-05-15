/*
     readFile异步读取
        语法：fs.readFile(path[,options],callback(err,data))
        参数说明：
            path 文件路径
            options 选项配置
            callback(err,data) 回调函数
                err:错误信息
                data:文件内容
        返回值：undefined
    readFileSync同步读取
*/

const fs = require('fs');

fs.readFile('./writeFile_fs异步写入.txt', (err, data) => {
    if (err) {
        console.log("读取失败");
        return;
    }
    console.log(data.toString());
})

let data = fs.readFileSync('./writeFileSync_fs同步写入.txt')
console.log(data.toString(),'\n');