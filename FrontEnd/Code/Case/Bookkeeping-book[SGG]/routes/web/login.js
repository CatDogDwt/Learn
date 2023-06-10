var express = require('express');
const UserModel = require('../../data/models/UserModel');
var router = express.Router();
const md5 = require('md5');


//登录页面
router.get('/login', (req, res, next) => {
    res.render('login')
});

//登录提交
router.post('/login', (req, res, next) => {
    //获取用户名和密码
    let { Username, Password } = req.body;
    //查询数据库
    UserModel.findOne({ Username, Password: md5(Password) }).then((data) => {
        if (data != null) {
            console.log(data.Username);
            req.session.username = data.Username;
            req.session._id = data._id;
            res.render('success', { msg: '登录', url: '/account' });
        } else {
            res.send('登录失败 用户名或密码错误');
        }
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
});

//退出登录
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.render('success', { msg: '退出登录', url: '/login' })
    })
})

module.exports = router;
