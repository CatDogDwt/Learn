# 学习 JavaScript 最难点之一 -- 理解prototype(原型)

玩了这么久JavaScript, 感觉最难的就2个部分, 原型和闭包, 很有必要总结一下.
主要是回顾下自己的理解过程是怎样的, 可能和别人的理解或者什么标准答案有出入, 完全是自己的想法, 因此请大家不要乱喷, 全当是思路而已, 没有半点误人子弟的意思.

下文中提到的JavaScript都将简写成JS, 实践环境为

Google Chrome	25.0.1364.172 (正式版本 187217) 
操作系统	        Windows 
WebKit	                537.22 (@145275)
JavaScript	        V8 3.15.11.17


要理解JS中的prototype, 首先必须弄清楚以下几个概念
1. JS中所有的东西都是对象

2. JS中所有的东西都由Object衍生而来, 即所有东西原型链的终点指向Object.prototype
     // ["constructor", "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", 
     //  "propertyIsEnumerable", "__defineGetter__", "__lookupGetter__", "__defineSetter__",
     // "__lookupSetter__"]
     console.log(Object.getOwnPropertyNames(Object.prototype));

3. JS中构造函数和实例(对象)之间的微妙关系
   构造函数通过定义prototype来约定其实例的规格, 再通过 new 来构造出实例, 他们的作用就是生产对象.
   而构造函数(方法)本身又是方法(Function)的实例, 因此也可以查到它的__proto__(原型链)

   Object       / function F() {} 这样子的就是构造函数啦, 一个是JS原生API提供的, 一个是自定义的
   new Object() / new F()           这样子的就是实例啦
   实例就"只能"查看__proto__来得知自己是基于什么prototype被制造出来的,
   而"不能"再重新定义实例的prototype妄想创造出实例的实例了.

   实践出真知, 只有自己动手观察/思考才能真正领悟:
   // 先来看看构造函数到底是什么
   // function Empty() {}    function Empty() {}
   console.log(Function.prototype, Function.__proto__);
   // Object {}                    function Empty() {}
   console.log(Object.prototype, Object.__proto__);
   function F() {}
   // F {}                            function Empty() {}
   console.log(F.prototype, F.__proto__);

   你可能已经晕了, 我们来分解一下
   prototype输出的格式为: 构造函数名 原型
   首先看下Object.prototype输出了什么?
   Object {} -> 前面的Object为构造函数的名称, 后面的那个表示原型, 这里是一个{}, 即一个Object对象的实例(空对象)
   那么 F {} 我们就明白是什么意思了, F 就是构造函数的名称, 原型也是一个空对象

   // 再来看看由构造函数构造出来的实例
   var o = new Object(); // var o = {};
   // undefined              Object {}
   console.log(o.prototype, o.__proto__);
   function F() {}
   var i = new F();
   // undefined              F {}
   console.log(i.prototype, i.__proto__);

   我们再深入一点, 定义下 F 的原型看看到底会发生些什么?
   function F() {}
   F.prototype.a = function() {};
   var i = new F();
   // undefined              F {a: function}
   console.log(i.prototype, i.__proto__);

   这样我们就清楚的看到 i 是由 F 构造出来的, 原型是 {a: function}, 就是原本的空对象原型新增了一个 a 方法

   我们再换一种情况, 完全覆盖 F 的原型会怎么样?
   function F() {}
   F.prototype = {
       a: function() {}
   };
   var i = new F();
   // undefined             Object {a: function}
   console.log(i.prototype, i.__proto__);
   
   咦~ 为什么这里表明 i 是由 Object 构造出来的? 不对吧!
   因为我们完全将 F 的prototype覆盖, 其实也就是将原型指定为对象{a: function}, 但这会造成原本的constructor信息丢失, 变成了对象{a: function}指定的constructor.
   那么对象{a: function}的constructor是什么呢?
   因为对象{a: function}其实就相对于
   var o = {a: function() {}} // new了一个Object
   那么o的constructor当然是 Object 啦

   我们来纠正下这个错误
   function F() {}
   F.prototype = {
       a: function() {}
   }
   // 重新指定正确的构造函数
   F.prototype.constructor = F;
   var i = new F();
   // undefined             F {a: function, constructor: function}
   console.log(i.prototype, i.__proto__);

   现在又能得到正确的原型信息了

   最后来看看什么原型链又是个什么东西?
   简单的来讲和OOP中的继承关系(链)是一样的, 一层一层往上找, 直至最终的 Object.prototype

![prototype chain](https://raw.githubusercontent.com/CatDogDwt/IHS/master/JavaScript/202302201514044.jpeg)

最最关键的是要弄清楚JS中哪些东西是(实例)对象, 这个简单了, JS中所有东西都是对象!
   再要弄清楚就是任何一个对象都是有一个原型的!

   那么我们来证明一下:
   Object // 这是一个函数, 函数是 Function 的实例对象, 那么就是由 Function 构造出来的
   Object.__proto__ == Function.prototype // 那么Object的原型, true
   // 这个是一个普通对象了, 因此属于 Object 的实例
   Function.prototype.__proto__ == Object.prototype // true
   // 这已经是原型链的最顶层了, 因此最终的指向 null
   Object.prototype.__proto__ == null // true

   Function // 这也是一个函数, 没错吧!
   Function.__proto__ == Function.prototype // true

   function A() {} // 这是一个自定义的函数, 终归还是一个函数, 没错吧! 
   A.__proto__ == Function.prototype // 任何函数都是 Function 的实例, 因此A的原型是?
   var a = new A()
   a.__proto__ == A.prototype // 实例a是由A构造函数构造出来的, 因此a的原型是由A的prototype属性定义的
   A.prototype.__proto__ == Object.prototype // 普通对象都是 Object 的示例