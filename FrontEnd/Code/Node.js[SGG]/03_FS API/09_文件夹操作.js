const fs = require('fs')

//创建文件夹 mkdir(path[,options],callback) / mkdirSync(path[,options])
fs.mkdir('./outputFiles/mkdir', err => {
    if (err) {
        console.log('创建失败');
        return;
    }
    console.log('创建成功');
});
////递归创建
fs.mkdir('./outputFiles/递归创建/a/b/c', { recursive: true }, err => {
    if (err) {
        console.log('创建失败');
        return;
    }
    console.log('创建成功');
});

//读取文件夹 readdir(path[,options],callback) / readdirSync(path[,options])
fs.readdir('./outputFiles', (err, data) => {
    if (err) {
        console.log('读取失败');
        return;
    }
    console.log(data);
})
//删除文件夹 rmdir(path[,options],callback) / rmdirSync(path[,options])
fs.rmdir('./outputFiles/mkdir', err => {
    if (err) {
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})
////递归删除(不推荐)
fs.rmdir('./outputFiles/递归创建', { recursive: true }, err => {
    if (err) {
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})
////递归删除(推荐)
fs.rm('./outputFiles/递归创建', { recursive: true }, err => {
    if (err) {
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})