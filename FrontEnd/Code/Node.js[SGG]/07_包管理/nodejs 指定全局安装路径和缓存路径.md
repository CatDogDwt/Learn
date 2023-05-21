进入 cmd 命令行，输入如下命令，

设置全局模块的安装路径到 "node_global" 文件夹，
设置缓存到 "node_cache" 文件夹

npm config set prefix "D:\Program Files\nodejs\node_global"
npm config set cache "D:\Program Files\nodejs\node_cache"
由于 node 全局模块大多数都是可以通过命令行访问的，

还要把 “D:\Program Files\nodejs\node_global” 加入到系统环境变量 PATH 中，方便直接使用命令行运行