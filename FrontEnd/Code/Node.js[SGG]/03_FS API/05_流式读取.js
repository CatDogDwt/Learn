const fs = require('fs')
//创建读取流对象
const rs = fs.createReadStream('../../HTML+CSS+JS[SGG]/01_HTML/source/audio/杀破狼.mp3');
//绑定data事件
rs.on('data', chunk => {
    console.log(chunk);
    console.log(chunk.length);//65536字节 => 64KB
})

//end事件 可选
rs.on('end', () => {
    console.log('读取完成');
})