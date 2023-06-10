//导入jwt
const jwt = require('jsonwebtoken');
//当服务器校验无问题时创建token
let token = jwt.sign({//用户数据,加密字符串,配置对象(设置token的生命周期 单位为秒)
    username: 'lol'
}, 'qazwsxedc', {
    expiresIn: 60
})

//当客户端携带token发送给服务器时校验token
jwt.verify(token, 'qazwsxedc', (err, data) => {//token,参与加密的字符串,回调函数
    if (err) {
        console.log('校验失败');
        return;
    }
    console.log(data);
})