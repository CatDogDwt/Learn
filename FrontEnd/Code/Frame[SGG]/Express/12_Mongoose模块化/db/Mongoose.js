//导入配置文件
const { DBHOST, DBPORT, DBNAME } = require('../config/config');
/**
 * 
 * @param {*} success 数据库连接成功的回调
 * @param {*} error 数据库连接失败的回调
 */
module.exports = (success, error) => {
    //判断error 为其设置默认值
    if (typeof error !== 'function') {
        error = () => {
            console.log('连接错误');
        }
    }
    const mongoose = require('mongoose');

    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

    mongoose.connection.once('open', () => {
        success();
        console.log('连接成功');
    });

    mongoose.connection.on('close', () => {
        console.log('连接关闭');
    })

    mongoose.connection.on('error', () => {
        error();
    })

    setTimeout(() => {
        mongoose.disconnect();
    }, 3000);

}