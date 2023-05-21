/**
创建与发布
我们可以将自己开发的工具包发布到npm服务上，方便自己和其他开发者使用，操作步骤如下:
    1，创建文件夹，并创建文件index.js，在文件中声明函数，使用module.exports暴露
    2. npm初始化工具包，package.json填写包的信息(包的名字是唯一的)
        注意：文件名需与package.json中的main一致
    3．注册账号https://www.npmjs.com/signup
    4．激活账号(一定要激活账号)
    5．修改为官方的官方镜像(命令行中运行nrm use npm )
    6．命令行下npm login填写相关用户信息
    7、命令行下npm publish提交包
更新包
后续可以对自己发布的包进行更新，操作步骤如下
    1．更新包中的代码
    2．测试代码是否可用
    3．修改package.json中的版本号
    4．发布更新 npm publish
删除包
    执行如下命令删除包
        npm unpublish
删除包需要满足一定的条件,https://docs.npmjs.com/policies/unpublish
    你是包的作者
    发布小于24小时
    大于24小时后，没有其他包依赖，并且每周小于300下载量，并且只有一个维护者
 */