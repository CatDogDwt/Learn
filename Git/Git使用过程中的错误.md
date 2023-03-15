# Git使用过程中的错误

- #### 如何解决git上传文件出错[rejected] master -> master (fetch first) error: failed to push some refs to '

  当执行到push时，就会报错，报错代码如下：

  ![](https://raw.githubusercontent.com/CatDogDwt/IHS/master/Git/202211061833751.png)

  出现这个问题是因为github中的README.md文件不在本地代码目录中，可以通过如下命令进行代码合并

  ```
  git pull --rebase xxx master
  ```

  然后再

  ```
  git push xxx master
  ```

  便可上传成功

- #### error: update_ref failed for ref 'refs/remotes/learn/master': cannot lock ref 'refs/remotes/learn/master': unable to resolve reference 'refs/remotes/learn/master': reference broken

  打开.git\refs\remotes\分支 文件夹，手动删除远程分支，然后再提交即可