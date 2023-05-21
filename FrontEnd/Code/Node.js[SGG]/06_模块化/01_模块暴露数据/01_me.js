/**
 * 模块化
 *      将一个复杂的程序文件依据一定规则拆分成多个文件的过程称为模块化
 *      其中拆分出的每个文件就是一个模块 模块的内部数据是私有的 不过模块可以暴露内部数据以便其他模块使用
 * 模块化项目
 *      编码时按照模块一个一个编码 整个项目就是一个模块化的项目
 * 模块化好处
 *      防止命名冲突
 *      高复用性
 *      高维护性
 * 模块暴露数据的两种方式
 *      1.module.exports = value
 *      2.exports.name = value
 *  注意：
 *      module.exports 可以暴露任意数据
 *      不能使用exports = value的形式暴露数据 模块内部module与exports的隐式关系exports=module.exports={}
 */


//声明一个函数
function tiemo(){
    console.log('贴膜...');
}

//捏脚
function niejiao(){
    console.log('捏脚...');
}


//module.exports = value暴露数据
// module.exports = {
//     tiemo,
//     niejiao
// }
//module.exports = '520'
//module.exports = 'iloveyou'
  
exports.tiemo = tiemo;
exports.niejiao = niejiao;