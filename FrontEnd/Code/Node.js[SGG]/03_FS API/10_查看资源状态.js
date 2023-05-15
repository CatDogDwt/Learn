const fs = require('fs')
/**
 * 查看资源状态
 *      fs.stat(path[,options],callback)
 *      fs.statSync(path[,options])
 *      结果值对象结构
 *          size 文件体积
 *          birthtime 创建时间
 *          mtime 最后修改时间
 *          isFile 检测是否为文件
 *          isDirectory 检测是否为文件夹
 *          ...
 */

fs.stat('./outputFiles', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.isFile());//检查是否为文件
    console.log(data.isDirectory());//检查是否为文件夹
})