var express = require('express');
var router = express.Router();
//导入lowdb 借助json文件实现数据库功能
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
//将数据存入db.hson
const adapters = new FileSync(__dirname + '/../data/db.json');
//获取db对象
const db = low(adapters);
// //初始化数据
// db.defaults({ posts: [], user: {} }).write();
//导入shortid
const shortid = require('shortid');

//记账本列表
router.get('/account', function (req, res, next) {
  //获取所有的账单信息
  let accounts = db.get('accounts').value();
  res.render('list', { accounts });
});
//添加记录列表
router.get('/account/create', function (req, res, next) {
  res.render('create');
});
//新增记录
router.post('/account', (req, res, next) => {
  //生成id
  let id = shortid.generate();
  //获取请求体
  db.get('accounts').unshift({ id: id, ...req.body }).write();
  res.render('success', { msg: '添加', url: '/account' });
})
//删除
router.get('/account/:id', (req, res, next) => {
  //获取 params的 id参数
  let id = req.params.id;
  //删除
  db.get('accounts').remove({ id: id }).write();
  res.render('success', { msg: '删除', url: '/account' });
})

module.exports = router;
