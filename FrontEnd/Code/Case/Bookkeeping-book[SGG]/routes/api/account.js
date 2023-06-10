var express = require('express');
var router = express.Router();
//导入moment
const moment = require('moment');
const AccountModel = require('../../data/models/AccountModel');

//记账本列表
router.get('/account', function (req, res, next) {
    //获取所有的账单信息
    AccountModel.find().then((data) => {
        //响应成功的提示
        res.json({
            //响应编号
            code: '0000',
            //响应信息
            msg: '读取成功',
            //响应数据
            data: data
        })
    }).catch((err) => {
        //响应错误的提示
        res.json({
            //响应编号
            code: '1001',
            //响应信息
            msg: 'error',
            //响应数据
            data: err
        })
        return;
    })
});

//新增记录
router.post('/account', (req, res, next) => {
    //插入数据库
    AccountModel.create({
        ...req.body,
        //用工具包将日期转换为对象 2023-02-24 => Moment => new Date()
        time: moment(req.body.time).toDate()
    }).then((data) => {
        res.json({
            code: '0000',
            msg: '添加成功',
            data: data
        })
    }).catch((err) => {
        res.json({
            code: '1002',
            msg: '添加失败',
            data: err
        })
        return;
    })
})

//删除
router.delete('/account/:id', (req, res, next) => {
    //删除
    AccountModel.deleteOne({
        _id: req.params.id
    }).then((data) => {
        res.json({
            code: '0000',
            msg: '删除成功',
            data: data
        })
    }).catch((err) => {
        res.json({
            code: '1003',
            msg: '删除失败',
            data: err
        })
        return;
    })
})

//获取单个账单信息
router.get('/account/:id', (req, res, next) => {
    AccountModel.findById({
        _id: req.params.id
    }).then((data) => {
        res.json({
            code: '0000',
            msg: '获取单个账单信息成功',
            data: data
        })
    }).catch((err) => {
        res.json({
            code: '1004',
            msg: '获取单个账单信息失败',
            data: err
        })
    })
})

//更新单个账单信息
router.patch('/account/:id', (req, res) => {
    //获取id参数值
    let { id } = req.params;
    //更新数据库
    AccountModel.updateOne({ _id: id }, req.body).then((data) => {
        //再次查询数据库获取单条数据
        AccountModel.findById(id).then((data) => {
            res.json({
                code: '0000',
                msg: `更新${id}成功`,
                data: data
            })
        }).catch((err) => {
            res.json({
                code: '1005',
                msg: '更新失败',
                data: err
            })
        })
    }).catch((err) => {
        res.json({
            code: '1005',
            msg: '更新失败',
            data: err
        })
    })
})

module.exports = router;
