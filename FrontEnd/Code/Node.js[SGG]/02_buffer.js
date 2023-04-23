/*
    Buffer 缓冲器
        Buffer是一个类似于数组的对象 用于表示固定长度的字节序列
        Buffer本质是一段内存空间 专门用来处理二进制数据
        特点
            Buffer大小固定无法调整
            Buffer性能较好 可以直接对计算机内存进行操作
            每个元素的大小为1字节
*/

//创建buffer的三种方式

//alloc 全部重置为0
let buf = Buffer.alloc(10);
console.log('alloc->', buf);

//allocUnsafe 会有内存残留 速度比alloc快
let buf2 = Buffer.allocUnsafe(10);
console.log('allocUnsafe->', buf2);

//from 可以将一个字符串或数组转换为buffer
let buf3 = Buffer.from('hello');
let buf4 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("from''->", buf3);
console.log('from[]->', buf4);

//buffer与字符串转换
let buf5 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf5.toString());//utf-8

//buffer的读写
let buf6 = Buffer.from('hello')
console.log(buf6[0]);//对buffer中的单个元素进行查看
console.log(buf6[0].toString(2));//01101000 .toString(2)转换为二进制
console.log("原始", buf6, buf6.toString());
buf2[0] = 95;//buffer的修改
console.log("修改后", buf6, buf6.toString());

//溢出
let buf7 = Buffer.from('hello')
buf7[0] = 361;//舍弃高位数字 0001 0110 1001 => 0110 1001
console.log(buf7);

//中文
let buf8 = Buffer.from('你好');
console.log(buf8);