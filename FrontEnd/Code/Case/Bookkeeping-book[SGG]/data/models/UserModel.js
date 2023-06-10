
const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    //此处的模型变量名需要与表单中的name相同 即此模型变量名需要与提交的数据键名相同
    Username: {
        type: String,
    },
    Password: {
        type: String,
    }
})
let UserModel = mongoose.model('users', UserSchema);

//暴露模型对象
module.exports = UserModel;