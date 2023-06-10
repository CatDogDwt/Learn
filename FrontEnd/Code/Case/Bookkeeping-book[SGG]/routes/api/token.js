var express = require('express');
const UserModel = require('../../data/models/UserModel');
var router = express.Router();
const md5 = require('md5')
const jwt = require('jsonwebtoken');
const { secret } = require('../../data/config/config')

//登录提交
router.post('/login', (req, res, next) => {
    //获取用户名和密码
    let { Username, Password } = req.body;
    //查询数据库
    UserModel.findOne({ Username, Password: md5(Password) }).then((data) => {
        if (data != null) {
            //生成用户token
            let token = jwt.sign({
                username: data.Username,
                _id: data._id
            }, secret, {
                expiresIn: 60 * 60 * 24 * 7,
            })
            //响应token
            res.json({
                code: '0000',
                msg: '登录成功',
                data: token
            })
        } else {
            res.json({
                code: '2002',
                msg: '用户名或密码错误',
                data: null
            })
        }
        console.log(data);
    }).catch((err) => {
        res.json({
            code: '2001',
            msg: '数据库读取失败',
            data: err
        })
    })
});

module.exports = router;