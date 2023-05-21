/**
 * 由淘宝构建的npmjs.com的完整镜像 https://npmmirror.com/
 * 安装cnpm
 *      npm install -g cnpm --registry=https://registry.npmmirror.com
 * 操作
 *      cnpm init 初始化
 *      cnpm i uniq 安装包
 *      cnpm i -S uniq
 *      cnpm i -D uniq
 *      cnpm i -g nodemon
 *      cnpm i 安装项目依赖
 *      cnpm r uniq 删除
 * npm配置淘宝镜像
 *      直接配置
 *          npm config set registry https://registry.npmmirror.com/
 *      工具配置
 *          使用nrm配置npm的镜像地址npm registry manager
 *          安装nrm
 *              npm i -g nrm
 *          修改镜像
 *              nrm use taobao
 *          检查是否配置成功
 *              npm config list 如果地址为https://registry.npmmirror.com/ 则成功
 *       注意：
 *          建议使用工具配置 后续修改容易
 */