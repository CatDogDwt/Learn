//声明中间件检测登录
module.exports = (req, res, next) => {
    //根据session校验身份信息
    if (!req.session.username) {
        return res.redirect('/login')
    }
    next();
}