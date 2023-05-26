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
        // tags: [],
        // Mixed: mongoose.Schema.Types.Mixed
    })
    //创建模型对象 对文档操作的封装对象 可以完成对文档的增删改查 第一个参数为集合名称 第二个参数为结构对象 注意mongoose在创建集合时会自动使用复数username->usernames
    let UserModel = mongoose.model('username', UserSchema);
    //？：7.0以上已不再支持回调函数 需要使用promise
    //新增 第一个参数为文档对象 第二个参数为回调函数？--->第一个参数为错误 第二个参数为插入成功的文档对象？
    UserModel.create({
        name: '黄毛2',
        age: "16"
    }).then((data) => {
        //如果未出错 则输出插入成功的文档对象
        console.log(data);
    }).catch((err) => {
        //如果出错输出错误
        console.log(err);
    });
    //删除一条数据 第一个参数为条件 第二个参数为回调函数？
    UserModel.deleteOne({//根据id删除
        _id: "64707d3025e5b1ada3f04725"
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
    //批量删除
    UserModel.deleteMany({
        age: 16,
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
    //更新一条文档 第一个参数为条件 第二个参数为更新内容 第三个参数为回调函数？
    UserModel.updateOne({ name: "黄毛2" }, { name: "改邪归正的黄毛2", age: 18 }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
    //批量更新 第一个参数为条件 第二个参数为更新内容 第三个参数为回调函数？
    UserModel.updateMany({ age: 16 }, { name: "改邪归正的黄毛", age: 18 }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
    //读取单条文档 第一个参数为条件 第二个参数为回调函数？
    UserModel.findOne({ name: '六花' }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
    //根据ID获取文档
    UserModel.findById({ _id: '646f243fa6d0e9f26eeddaac' }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
    //获取多条文档
    UserModel.find({ age: 18 }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
    //获取全部
    UserModel.find().then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
    //条件获取 第一个参数为字段名称 第二个参数为回调函数？
    UserModel.find({ $and: [{ name: new RegExp('黄') }, { $and: [{ age: { $gte: 18 } }, { age: { $lte: 109 } }] }] }).then((data) => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
    //字段筛选 读取文档中的某些属性 1要的字段 0不要的字段
    UserModel.find().select({ name: 1, _id: 0 }).exec().then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
    //数据排序 sort排序 1升序 -1倒序
    UserModel.find().select({ _id: 0, __v: 0 }).sort({ age: 1 }).exec().then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
    //数据截取(分页) skip跳过 limit限定(取多少条)
    UserModel.find().select({ _id: 0, __v: 0 }).sort({ age: 1 }).limit(3).skip(2).exec().then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
})
mongoose.connection.on('error', () => {//连接错误的回调
    console.log('连接失败');
})
mongoose.connection.on('close', () => {//连接关闭的回调
    console.log('连接关闭');
})


//关闭mongodb的连接
setTimeout(() => {
    mongoose.disconnect();
}, 3000)