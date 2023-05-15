//复制HTML+CSS+JS[SGG]/01_HTML/source/audio下的杀破狼文件

//方式一：readFile
const fs = require('fs');
// //读取文件
let data = fs.readFileSync('../../HTML+CSS+JS[SGG]/01_HTML/source/audio/杀破狼.mp3')
//写入文件
fs.writeFileSync('./outputFiles/杀破狼copy.mp3', data)

//方式二：流式操作 此种方式所占资源更好 只需要64kb的内存空间就可以完成复制 
//创建读取流对象
const rs = fs.createReadStream('../../HTML+CSS+JS[SGG]/01_HTML/source/audio/杀破狼.mp3')
//创建写入流对象
const ws = fs.createWriteStream('./outputFiles/杀破狼流式copy.mp3')

rs.on('data', chunk => {
    ws.write(chunk)
})

//另一种简便写法
// rs.pipe(ws)