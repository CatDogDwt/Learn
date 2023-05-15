/*
    文件写入在计算机中的应用场景
        下载文件
        安装软件
        保存程序日志 如Git
        编辑器保存文件
        视频录制
    当需要持久化保存数据时 应该想到文件写入
    fs（file system） API
        fs模块可以实现与硬盘的交互 例如文件创建删除修改移动重命名写入读取 以及文件夹的相关操作
        文件写入
            writeFile 异步写入
                语法：fs.writeFile(file,data[,options],callback)
                    参数说明 file 文件名 data 代写入数据 options 选项设置 callback写入回调
            writeFileSync 同步写入
                语法：fs.writeFileSync(file,data[,options])
        返回值 undefined
*/

//新建座右铭.txt 写入内容：心臓を捧げよ！！！

const fs = require('fs');//导入fs模块

fs.writeFile('./outputFiles/writeFile_fs异步写入.txt', '心臓を捧げよ！！！', err => {
    //如果写入失败 则err的值为一个错误对象 写入成功 err的值为null
    if (err) {
        console.log('写入失败');
        return;
    } else {
        console.log('写入成功');
    }
})//写入文件

// fs.writeFileSync('./outputFiles/writeFileSync_fs同步写入.txt', '心臓を捧げよ！！！')//同步写入


