
const mongoose = require('mongoose');

let AccountSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    time: Date,
    type: {
        type: String,
        default: '支出'
    },
    money: {
        type: Number
    }
})
let AccountModel = mongoose.model('records', AccountSchema);

//暴露模型对象
module.exports = AccountModel;