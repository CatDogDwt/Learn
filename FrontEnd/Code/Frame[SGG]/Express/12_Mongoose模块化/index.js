//导入db
const Mdb = require('./db/Mongoose');
//导入Model
const userModel = require('./models/userModel')

//调用db
Mdb(() => {
    userModel.create({
        name: '普尔亚',
        age: 300
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
});