# 如何解决git上传文件出错[rejected] master -> master (fetch first) error: failed to push some refs to '

当执行到push时，就会报错，报错代码如下：

![image-20221101174822460](https://raw.githubusercontent.com/CatDogDwt/IHS/master/CSharp/202211011748510.png)

出现这个问题是因为github中的README.md文件不在本地代码目录中，可以通过如下命令进行代码合并

```
git pull --rebase xxx master
```

然后再

```
git push xxx master
```

便可上传成功