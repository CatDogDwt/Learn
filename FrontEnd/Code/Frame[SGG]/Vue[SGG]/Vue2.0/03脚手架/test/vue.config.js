const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查
  // devServer: {//开启代理服务器 方式1
  //   proxy: 'http://localhost:5000'
  // }
  devServer: {//开启代理服务器 方式2
    proxy: {
      // '/stu': {
      //   target: 'http://localhost:5000',
      //   pathRewrite: { '^/stu': '' },
      //   ws: true,//用于支持websocket
      //   changeOrigin: true//用于控制请求头中的host值
      // },
      // '/cars':{
      //   target: 'http://localhost:5001',
      //   pathRewrite: { '^/cars': '' },
      //   ws: true,//用于支持websocket
      //   changeOrigin: true//用于控制请求头中的host值
      // }
    }
  }
})
