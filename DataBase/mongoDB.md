# mongoDB

1. #### 简介

   MongoDB是一个基于分布式文件存储的数据库 https://www.mongodb.com

   MongoDB语法与JavaScript类似

2. #### 数据库是什么

   数据库是按照数据结构来组织存储和管理数据的应用程序

3. #### 数据库的作用

   管理数据 对数据进行增c删d改u查r

4. #### 数据库管理数据的特点

   相比于纯文件管理 数据库管理数据有如下特点

   - 速度更快
   - 扩展性强
   - 安全性强

5. #### MongoDB核心概念

   数据库 database 数据库是一个数据仓库 数据库服务下可以创建很多数据库 数据库中可以存放很多集合

   集合 collection 集合类似于JS中的数组 在集合中可以存放很多文档

   文档 document 文档是数据库中的最小单位 类似与JS中的对象

   ![image-20230525154411187](https://raw.githubusercontent.com/CatDogDwt/IHS/master/DataBase/MongoDB/202305251544251.png)

   如果用JSON文件理解MongoDB:

   - 一个json文件就是一个数据库 一个MongoDB服务下可以有N个数据库
   - JSON文件中的一级属性的数组值好比是集合
   - 数组中的对象好比是文档
   - 对象中的属性有时也称之为字段

6. #### 一般情况下

   - 一个项目使用一个数据库
   - 一个集合会存储同一种类型的数据

7. #### 启动服务

   - 下载安装mongodb
   - 将bin添加环境变量
   - 在bin目录启动命令行
   - 执行命令 mongod 或 mongod --dbpath x:\x\x...
   - 寻找waiting for connections 表明服务端启动成功

   ![image-20230525161515802](https://raw.githubusercontent.com/CatDogDwt/IHS/master/DataBase/MongoDB/202305251615913.png)

   - 在bin目录启动另一个命令行
   - 执行客户端mongo与端口号建立连接

   ![image-20230525161947413](https://raw.githubusercontent.com/CatDogDwt/IHS/master/DataBase/MongoDB/202305251619470.png)

   - 执行show dbs向服务端发送请求 查看服务下有哪些数据库<img src="https://raw.githubusercontent.com/CatDogDwt/IHS/master/DataBase/MongoDB/202305251622001.png" alt="image-20230525162215975"  />
     - 不要选中服务端窗口内容 选中会停止服务 可以敲回车取消选中

8. #### 数据库与集合和文档命令

   - ###### 数据库命令

     - show dbs 显示所有数据库

     - use 数据库名 :切换指定数据库 如果数据库不存在则会自动创建数据库

     - db 显示当前所在数据库

     - use 库名

       db.dropDatabase() 删除当前数据库

   - ###### 集合命令

     - db.createCollection('集合名称') 创建集合
     - show collections 显示当前数据库中的所有集合
     - db.集合名.drop() 删除某个集合
     - db.集合名.renameCollection('新的集合名') 重命名集合

   - ###### 文档命令

     - db.集合名.insert(文档对象) 插入文档

       db.person.insert([ {name:"Mary", age:21, status:"A"}, {name:"Lucy", age:89, status:"A"}, {name:"Jacky", age:30, status:"A"} ]); 插入多个文档

     - db.集合名.find(查询条件) 查询文档  _id是mongodb自动生成的唯一编号 用来唯一标识文档

     - db.集合名.update(查询条件，新的文档) 更新文档

       db.集合名.update({name:'张三'},{$set:{age:19}})

     - db.集合名.remove(查询条件) 删除文档