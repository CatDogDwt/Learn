var express = require('express');
var router = express.Router();
//导入moment
const moment = require('moment');
const AccountModel = require('../data/models/AccountModel');

//记账本列表
router.get('/account', function (req, res, next) {
    //获取所有的账单信息
    AccountModel.find().then((data) => {
        res.render('list', { data });
    }).catch((err) => {
        console.log(err);
        return;
    })
});
//添加记录列表  
router.get('/account/create', function (req, res, next) {
    res.render('create');
});
//新增记录
router.post('/account', (req, res, next) => {
    //插入数据库
    AccountModel.create({
        ...req.body,
        //用工具包将日期转换为对象 2023-02-24 => Moment => new Date()
        time: moment(req.body.time).toDate()
    }).then((data) => {
        console.log(data);
        res.render('success', { msg: '添加', url: '/account' });
    }).catch((err) => {
        console.log(err);
        res.status(500).send('插入失败');
        return;
    })
})
//删除
router.get('/account/:id', (req, res, next) => {
    //删除
    AccountModel.deleteOne({
        _id: req.params.id
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
        res.status(500).send('删除失败');
        return;
    })
    res.render('success', { msg: '删除', url: '/account' });
})

module.exports = router;
