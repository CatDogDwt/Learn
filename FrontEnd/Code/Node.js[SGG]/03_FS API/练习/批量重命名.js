/**
 * 在上传时 文件的排列顺序为 1 10 2 3 4 ... 9
 * 需要更改成 01 02 03 04 ... 09 10
 */

const fs = require('fs');
//读取files文件夹
const files = fs.readdirSync(__dirname + '/Files')
//遍历
files.forEach(item => {
    //拆分文件名
    let data = item.split('.');//根据.拆分
    let [num, name] = data;//数组解构赋值
    //判断.js之前是否小于10 如果小于10在头部+0
    if (Number(num) < 10) {
        num = '0' + num
    }
    //创建新的文件名
    let newName = num + '.' + name;
    fs.rename(__dirname + '/Files/' + item, __dirname + '/Files/' + newName, err => {
        if (err) {
            console.log("重命名失败\n" + err);
        }
        console.log("重命名成功！");
    })
})

/**
 * 问题：如果文件名称没有按顺序进行 比如 1 2 5 7 8 ... 100 怎么重命名成 01 02 03 04 05 ... ?
 * 猜想：通过判断当前文件数字位是否为上一文件数字位加1 若是 则直接加0 若不是 则变成上一位+1再加0
 */