/**
 * 包 package 代表了一组特定功能的源码集合
 * 包管理工具
 *      管理包的应用软件 可以对包进行下载安装 更新 删除 上传等
 * 常用的包管理工具 
 *      npm (Node Package Manager)
 *          基本使用
 *              创建空目录 以此目录为工作目录启动命令行 执行npm init
 *              npm init 初始化
 *                  将文件夹初始化为一个包 交互式创建package.json文件
 *                  package.json是包的配置文件 每个包都必须有package.json
 *               package.json内容示例
 *               {
 *                  "name":"01_npm", 包名
 *                  "version":"1.0.0", 包的版本
 *                  "description":"", 包的描述
 *                  "main":"index.js", 包的入口文件
 *                  "author":"", 作者
 *                  "license":"ISC" 开源证书
 *                  "scripts":{ 
 *                      "test":"echo \ "Error:no test specified\" && exit 1"
 *                  }
 *               }
 *              注意：
 *                  package name不能使用中文 大写 默认值为文件夹名称 所以文件夹名称也不能使用中文和大写
 *                  version要求x.x.x的形式定义 x必须是数字 默认值为1.0.0
 *                  ISC证书与MIT证书功能上是相同的 关于开源证书扩展阅读http://www.ruanyifeng.com/blog/2011/05/how to choose free software licenses.html
 *                  package.json可以手动创建与修改
 *                  使用npm init -y或者npm init --yes急速创建package.json
 *           npm搜索包
 *              1.npm s 关键字
 *              2.https://www.npmjs.com/
 *           npm下载安装包
 *              npm install <包名>
 *              npm i <包名>
 *              运行之后文件夹下会新增两个资源
 *                  node_modules 存放下载的包
 *                  package-lock.json 包的锁文件 用来锁定包的版本
 *              例如安装uniq之后 uniq就是当前这个包的一个依赖包 有时会简称为依赖
 *              比如创建一个包为A A中安装了包B 我们就说B是A的一个依赖包 也会说A依赖B
 * 
 * 生产环境是项目代码正式运行的环境 一般是指正式的服务器电脑 生产环境的项目每个客户都可以访问
 * 开发环境是程序员专门用来写代码的环境 一般是指程序员的电脑 开发环境的项目只能程序员自己访问
 * 
 * 生产依赖 开发阶段和最终上线运行阶段都用到的依赖包
 *      npm i -S uniq   
 *      npm i --save uniq
 *      -S等效于--save -S是默认选项 包信息保存在package.json中dependencies属性   
 * 开发依赖 只在开发阶段使用的依赖包
 *      npm i -D less
 *      npm i --save-dev less 
 *      -D等效于--save-dev 包信息保存在package.json中devDependencies属性
 * 全局安装
 *      npm i -g nodemon
 *      安装完毕之后可以在命令行的任何位置运行nodemon命令来自动重启node应用程序
 *      全局安装的命令不受工作目录位置影响 可以通过npm root -g查看全局安装包的位置
 *      只有全局类的工具适合全局安装 可以通过查看包的官方文档确定安装方式
 *      npm ls -g 查看全局安装的包
 * 安装包依赖
 *      在项目协作中 node_modules文件夹大多数情况都不会存入版本库
 *      所以需使用npm i 或 npm install来安装依赖
 *      此命令可以依据package.json和package-lock.json的依赖声明安装项目依赖
 * 安装指定版本包
 *      在项目中可能会遇到版本不匹配的情况
 *      npm i
 *      npm i jquery@1.11.2
 * 删除依赖
 *      项目中可能需要删除某些不需要的包
 *      npm remove uniq
 *      npm r uniq
 *      npm remove -g nodemon全局删除
 * npm配置命令别名
 *      通过配置命令别名可以更简单的执行命令
 *      通过配置package.json中的scripts属性
 *      {
 *          "scripts":{
 *              "server":"node server.js",
 *              "start":"node index.js",
 *          }
 *      }
 *      配置完成后可以使用别名执行命令
 *      npm run server
 *      npm run start 或 npm start
 *      注意：
 *          npm start是项目的常用命令 通常用来启动项目
 *          npm run有自动向上级目录查找的特性 和require函数一样
 *          对于陌生项目 可以通过scripts属性来参考项目的一些操作
 */