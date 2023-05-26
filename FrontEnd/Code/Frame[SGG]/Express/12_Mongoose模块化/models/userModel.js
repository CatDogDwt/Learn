
const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
let UserModel = mongoose.model('usernames', UserSchema);

//暴露模型对象
module.exports = UserModel;