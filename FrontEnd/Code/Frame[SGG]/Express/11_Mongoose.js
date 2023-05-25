/**
 * Mongoose是一个对象文档模型库 http://www.mongoosejs.net 方便使用代码操作mongodb数据库
 * 文档结构常用字段类型
 *  String 字符串 '' ""
 *  Number 数字 123
 *  Boolean 布尔值 true false
 *  Array 数组(也可以用[]标识) [1,"2"]
 *  Date 日期 new Date()
 *  Buffer buffer对象
 *  Mixed 任意类型 需要使用mongoose.Scheama.Types.Mixed指定
 *  ObjectId 对象id 需要使用mongoose.Scheama.Types.ObjectId指定 一般使用此类型做外键
 *  Decimal128 高精度数字 需要使用mongoose.Scheama.Types.Decimal128指定
 * Mongoess字段验证 将属性值设置为对象 在对象中 使用type表示字段类型
 *  必填项
 *      title:{
 *          type:String,
 *          required:true//设置必填项
 *      }
 *  默认值
 *      author:{
 *          type:String,
 *          default:'匿名'
 *      }
 *  枚举值
 *      gender:{
 *          type:String,
 *          enum:['男','女'] 设置的值必须是数组中的 如果输入的值未在数组中 则会报错
 *      }
 *  唯一值
 *      username:{
 *          type:String,
 *          unique:true unique需要重建集合才有效果
 *      }
 * 
 */
//导入mongoose
const mongoose = require('mongoose');
//设置strictQuery为true 消除警告
// mongoose.set('strictQuery',true);
//连接mongodb服务
mongoose.connect('mongodb://127.0.0.1:27017/Users');
//设置回调函数 once 事件回调函数只执行一次 防止app.listen对端口多次监听
mongoose.connection.once('open', () => {//连接成功的回调
    console.log('连接成功');
    //创建文档的结构对象 设置集合中文档的属性以及属性值的类型
    let UserSchema = new mongoose.Schema({
        name: String,
        age: Number,
        tags: [],
        Mixed: mongoose.Schema.Types.Mixed
    })
    //创建模型对象 对文档操作的封装对象 可以完成对文档的增删改查 第一个参数为集合名称 第二个参数为结构对象
    let UserModel = mongoose.model('username', UserSchema);
    //新增 第一个参数为文档对象 第二个参数为回调函数--->第一个参数为错误 第二个参数为插入成功的文档对象
    UserModel.create({
        name: '黄毛',
        age: "25"
    }).then((err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        //如果未出错 则输出插入成功的文档对象
        console.log(data);
        //关闭mongodb的连接
        setTimeout(() => {
            mongoose.disconnect();
        }, 5000)
    });
})
mongoose.connection.on('error', () => {//连接错误的回调
    console.log('连接失败');
})
mongoose.connection.on('close', () => {//连接关闭的回调
    console.log('连接关闭');
})