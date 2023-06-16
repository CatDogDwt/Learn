//声明构造函数
function Promise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callbacks = [];
    //保存实例对象的this的值
    const _this = this;
    //声明执行器参数
    function resolve(params) {//resolve函数
        //判断状态
        if (_this.PromiseState !== 'pending') return;
        //修改对象的状态（promiseState）
        _this.PromiseState = '🐂逼';
        //设置对象的结果值(promiseResult)
        _this.PromiseResult = params;
        //遍历调用成功的回调函数
        _this.callbacks.forEach(item => {
            item.onResolved(params)
        })
    }
    function reject(params) {//reject函数
        //判断状态
        if (_this.PromiseState !== 'pending') return;
        //修改对象的状态（promiseState）
        _this.PromiseState = '🐕逼';
        //设置对象的结果值(promiseResult)
        _this.PromiseResult = params;
        //遍历调用失败的回调函数
        _this.callbacks.forEach(item => {
            item.onRejected(params)
        })
    }
    try {
        //执行器函数同步调用
        executor(resolve, reject);
    } catch (e) {
        //修改promise对象状态为失败
        reject(e);
    }

}


//添加then方法
Promise.prototype.then = function (onResolved, onRejected) {
    //返回promise
    return new Promise((resolve, reject) => {
        //调用回调函数
        if (this.PromiseState === '🐂逼') {//判断状态
            //获取回调函数的执行结果
            let result = onResolved(this.PromiseResult);
            //判断
            if(result instanceof Promise){
                //
            }else{
                //结果的对象状态为成功
            }
        }
        if (this.PromiseState === '🐕逼') {//判断状态
            onRejected(this.PromiseResult);
        }
        if (this.PromiseState === 'pending') {//判断状态
            //保存回调函数
            this.callbacks.push(
                {
                    onResolved,//简写 onResolved:onResolved;
                    onRejected
                }
            )
        }
    })
}