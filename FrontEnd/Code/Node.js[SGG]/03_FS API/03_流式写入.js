/*
    createWriteStream(path[,options])
    参数说明
        path 文件路径
        options 选项配置
    返回值 object

    注意：程序打开一个文件是需要消耗资源的 流式写入可以减少打开关闭文件的次数
         流式写入方式适用于大文件写入或者频繁写入的场景 writeFile适合写入频率较低的场景
*/

const fs = require('fs');

//创建写入流对象
const ws = fs.createWriteStream('./outputFiles/流式写入.txt');
//写入
ws.write('写入1\n');
ws.write('写入2\n');
ws.write('写入3\n');
ws.write('写入4\n');
ws.write('写入5\n');
ws.write('写入6');

//关闭通道
ws.close()