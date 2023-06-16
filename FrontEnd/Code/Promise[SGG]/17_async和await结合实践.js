
const fs = require('fs')
const util = require('util');
const mineReadFile = util.promisify(fs.readFile)

//读取resource中的123html内容 并拼接
async function main() {
    try {
        let data1 = await mineReadFile('./resource/1.html')
        let data2 = await mineReadFile('./resource/2.html')
        let data3 = await mineReadFile('./resource/3.html')
        console.log(data1 + data2 + data3);
    } catch (e) {
        console.log(e);
    }
}

main();
