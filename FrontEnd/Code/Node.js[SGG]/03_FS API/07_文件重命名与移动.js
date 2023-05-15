/* 
    文件移动与重命名
        fs.rename(oldPath,newPath,callback)
        fs.renameSync(oldPath,newPath)
        参数说明
            oldPath 文件当前的路径
            newPath 文件新的路径
            callback 操作后的回调
*/

//文件重命名与移动同时
const fs = require('fs');
fs.rename('./outputFiles/文件.txt', './文件重命名.txt', err => {
    if (err) {
        console.log('操作失败');
        return;
    } else {
        console.log('操作成功');
    }
})