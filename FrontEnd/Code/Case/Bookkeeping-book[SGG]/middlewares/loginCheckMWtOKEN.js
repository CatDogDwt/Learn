const { secret } = require('../data/config/config')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    //获取token
    let token = req.get('token');
    if (!token) {
        return res.json({
            code: '2003',
            msg: 'token缺失',
            data: null
        })
    }
    //校验token
    jwt.verify(token, secret, (err, data) => {
        //检测token是否正确
        if (err) {
            return res.json({
                code: '2004',
                msg: '检验失败',
                data: null
            })
        }
        //保存用户信息
        req.user = data;
        //校验成功
        next()
    })
}