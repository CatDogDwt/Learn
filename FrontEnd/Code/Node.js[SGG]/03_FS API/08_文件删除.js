/**
 * 文件删除
 *      fs.unlink(path,callback)
 *      fs.unlinkSync(path)
 */

const fs = require('fs')

fs.unlink('./outputFiles/writeFile_fs异步写入.txt', err => {
    if (err) {
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})

//另一种方法 调用rm
fs.rm('./outputFiles/writeFile_fs异步写入.txt', err => {
    if (err) {
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})