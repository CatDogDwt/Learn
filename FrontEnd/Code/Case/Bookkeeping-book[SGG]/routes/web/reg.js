var express = require('express');
const UserModel = require('../../data/models/UserModel');
var router = express.Router();
const md5 = require('md5');

//注册页面
router.get('/reg', (req, res, next) => {
    res.render('reg')
});

//注册提交
router.post('/reg', (req, res, next) => {
    //在此表单验证?未作
    //获取请求体数据
    UserModel.create({
        ...req.body,
        //使用md5对密码加密 md5为单项不可逆加密 只能通过元数据找到加密数据
        Password: md5(req.body.Password)//可以通过对用户在登陆时提交的密码加密后在数据库进行比对来判断是否相同 
    }).then((data) => {
        res.render('success', { msg: '注册', url: '/login' })
        console.log(data);
    }).catch((err) => {
        console.log(err);
        res.status(500).send('注册失败')
    })
});

module.exports = router;
