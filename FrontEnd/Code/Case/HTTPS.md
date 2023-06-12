# HTTPS

https本意是http+SSL（Secure Sockets Layer）安全套接层

https可以加密http报文 可以理解为安全的http

以下操作须在服务器端完成

- 配置https证书 https://certbot.eff.org

- 下载工具 https://dl.eff.org/certbot-beta-installer-win_amd64.exe

- 安装工具

- 管理员运行命令 certbot certonly --standalone

- 代码配置如下

  ```js
  const https = require('https')
  https.createServer(
      {
          key:fs .readFileSync('/etc/letsencrypt/path/to/key.pem'),
          cert:fs.readFileSync('/etc/letsencrypt/path/to/cert.pem'),
          ca:fs.readFileSync('/etc/letsencrypt/path/to/chain.pem'),
      },
      app.listen(443,()=>{
          console.log('Listening...')
      })
  )
  ```

- 证书更新 证书有效期为三个月 可以通过下面的命令更新

  - 一般更新

    certbot renew

  - 强制更新

    certbot --force-renewal