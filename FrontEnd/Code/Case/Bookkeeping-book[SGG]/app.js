var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/web/newindex');
//导入account接口的路由文件
const accountRouter = require('./routes/api/account')
//注册页面
const regRouter = require('./routes/web/reg')
//登录页面
const loginRouter = require('./routes/web/login')
//通过express-session中间件对session操作
const session = require('express-session');
// 通过connect-mongo连接数据库 将session信息存储到数据库中
const MongoStore = require('connect-mongo');
//导入配置文件
const { DBHOST, DBPORT, DBNAME } = require('./data/config/config');

const tokenRouter = require('./routes/api/token')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//设置session中间件
app.use(session({
  name: 'sid',//设置cookie的name 默认值是 connect.sid
  secret: 'went',//参与加密的字符串(又称签名) 加盐
  saveUninitialized: false,//是否为每次请求都设置一个cookie用来存储session的id(记录匿名用户可以设置为true)
  resave: true,//是否在每次请求时重新保存session
  store: MongoStore.create({
    mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`//数据库连接配置
  }),
  cookie: {
    httpOnly: true,//开启后前端无法通过JS操作
    maxAge: 1000 * 60 * 60 * 24 * 7//控制sessionid的过期事件
  },
}))

app.use('/', indexRouter);
app.use('/api', accountRouter);
app.use('/', regRouter);
app.use('/', loginRouter);
app.use('/api', tokenRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // next(createError(404));
  res.render('404')
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
