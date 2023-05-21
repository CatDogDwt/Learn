/**
 * 导入模块
 *      在模块中使用require传入文件路径即可引入文件
 *  注意：
 *      对于自己创建的模块 导入时路径建议写相对路径 且不能省略./和../
 *      js和json文件导入时可以不用写后缀 c/c++编写的node扩展文件也可以不写后缀 但是一般用不到
 *      如果导入其他类型的文件 会以js文件进行处理
 *      如果导入的路径是个文件夹 则会首先检测该文件夹下package.json文件中main属性对应的文件
 *      如果main属性不存在 或者package.json不存在 则会检测文件下的index.js 和 index.json,如果还未找到 就会报错
 *      导入node.js内置模块时 直接require模块的名字即可 不用加./和../
 * 导入模块的基本流程
 *      将相对路径转为绝对路径 定位目标文件
 *      缓存检测
 *      读取目标文件代码
 *      包裹为一个函数并执行（自执行函数）通过arguments.callee.toString()查看自执行函数
 *      缓存模块的值
 *      返回module.exports的值
 */
const me = require('./01_me.js');

//调用函数
me.tiemo();

me.niejiao();