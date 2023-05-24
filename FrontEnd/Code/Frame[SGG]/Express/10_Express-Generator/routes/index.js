var express = require('express');
var router = express.Router();
const formidable = require('formidable');//使用formidable包处理文件上传

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//显示网页表单
router.get('/portrait', (req, res) => {
  res.render('portrait');
})
//处理文件上传
router.post('/portrait', (req, res) => {
  //创建form对象
  const form = formidable({
    multiples: true,
    // 设置上传文件的保存目录
    uploadDir: __dirname + '/../public/images',
    //保持文件后缀
    keepExtensions: true
  });
  //解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    //服务器保存该图片的访问URL
    let url = '/images/' + files.portrait.newFilename;//将来将此数据保存在数据库中

    // res.json({ fields, files });
    res.send('上传成功 图片地址' + url);
  })
})

module.exports = router;
