# jQuery

jQuery是一个快速的、小型的、具有丰富功能的JavaScript库。它的出现使得网页中的DOM、事件、动画、Ajax等操作变得更加简单。“写更少的代码，做更多的事儿”是jQuery一直坚信的开发理念。

库就是一组代码，这组代码中包含了一些已经定义好的对象和函数。只需要将库引入到页面中，即可直接使用这些对象和函数。库中的代码通常是为了解决一些我们开发中的一些不便。jQuery中的代码就是为了简化原生JS的操作，同样一个功能使用原生JS你也许要编写五行代码，使用jQuery一行就可以搞定，同时jQuery还可以帮助我们处理掉浏览器的兼容问题。

## JQuery —— 一个过时的库

所有的库都是为了解决我们开发时的痛点而存在的。jQuery解决的问题主要有两个：简化DOM操作、解决浏览器兼容问题。然而随着前端的发展、DOM标准的更新、IE的消亡。DOM操作和浏览器兼容性早已不是什么大问题了，再加上React、Vue、Angular这些大型框架的出现，在实际项目中使用jQuery的机会可以说是少之又少。这是不是就意味着我们没有必要在学习jQuery了呢？是的，确实没有学习jQuery的必要了。所以如果是比较赶时间的同学，完全可以跳过jQuery的学习，不需要再继续听下边的内容了。

## 如果我想学呢？

如果你看到这了，说明你可能没有那么的赶时间。那么我可以在勉勉强强给你找找学习jQuery的理由。首先，jQuery很简单学习它不会耽误你很多的时间。第二，jQuery是我们从原生JS步入JS库的一个过渡，通过学习它，可以帮助我们理解库的作用。第三，艺多不压身，会总比不会要强。

## 引入JQuery

上文说过，库就是一组现成的JS代码，要使用库就需要先把这组代码引入到页面中，也就是引入库。实际的操作就是通过script标签引入一个外部的js文件，这一点所有的库都是一样的。

引入jQuery，可以直接下载jQuery脚本文件，然后放入本地服务器，并在网页中通过script标签进行引入。也可以通过公共的cdn来引入。

### CDN

使用公共cdn比较简单，以字节跳动静态资源为例，要引入3.x版本的jQuery，只需要将如下代码粘贴到网页中即可：



```html
<script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.6.0/jquery.js"></script>
```

或者这个：



```html
<script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.6.0/jquery.min.js"></script>
```

完整：



```html
<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script src="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.6.0/jquery.min.js"></script>
    </head>
    <body>
    </body>
</html>
```

### 本地引入：

下载地址：

开发环境版：https://code.jquery.com/jquery-3.6.1.js

生产环境版：https://code.jquery.com/jquery-3.6.1.min.js

完整：



```html
<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script src="./script/jquery/jquery-3.6.1.min.js"></script>
    </head>
    <body>
        
       
    </body>
</html>
```

开发环境版是未经压缩过的jQuery代码，文件格式略大，需要查看jQuery源代码时可以引用这个版本。生产环境版是经过压缩的jQuery代码，文件较小，不方便查看代码，一般用于生产环境中。如果不需要查看源代码建议使用生产环境版。

## JQuery核心函数

引入jQuery后，它会自动在全局作用域添加一个名为`jQuery`的新函数，新函数还有一个别名`$`。换句话说，通过`jQuery`和`$`都可以访问到这个函数，这个函数我们称为jQuery的核心函数。我们引入jQuery目的就是得到这个函数，学习jQuery也就是在学习这个核心函数。

可以通过两种方式来使用核心函数，一种是将其作为对象使用，此时它是一个工具类，在其中封装了一些属性和方法。

- jQuery.contains()
- jQuery.isArray()
- jQuery.isFunction()
- jQuery.isNumeric()
- ……

另一种是将其作为函数调用，根据参数的不同可以会发挥不同的作用。

- jQuery(函数)
- jQuery(选择器)
- jQuery(DOM对象)
- jQuery(HTML代码)

注意：上述编写代码时可以使用$代替jQuery。

### 函数作为参数

当使用函数作为jQuery的参数时，jQuery会使该函数在文档加载完毕后执行，比如：



```js
$(function(){
    
})
```

等价于



```js
document.addEventListener("DOMContentLoaded", function(){
    
})
```

### 选择器字符串作为参数

如果将一个选择器字符串作为参数传递给核心函数，则jQuery会根据选择器去页面中查询元素，并将查询到的元素返回，比如：



```js
var $box1 = $("#box1") // 获取id为box1的元素
var $news = $(".news") // 获取class为news的元素
var $hello = $("[title=hello]") // 获取title属性为hello的元素
```

注意！通过jQuery核心函数获取到的对象并不是我们所熟悉的DOM对象，而是一个由jQuery定义的新对象，为了和我们熟悉的DOM对象做区分，这个对象我们称之为jQuery对象。记住！通过jQuery核心函数获取到的对象是jQuery对象。

DOM对象本身存在着一些不足，比如兼容问题、操作不方便等，为了解决这些问题，jQuery设计了一个新的对象，jQuery对象。可以将jQuery对象理解为DOM对象的升级版，为DOM对象增加了许多功能，同时解决了DOM对象的兼容性问题，关于jQuery对象的细节后续讲解。

### DOM对象作为参数

如果将一个DOM对象作为参数，核心函数会将其转换为jQuery对象并返回。



```js
var box1 = document.getElementById("box1") // 获取DOM对象
var $box1 = $(box1) // 转换为jQuery对象
```

### HTML代码作为参数

如果将一段HTML代码作为参数，核心函数会根据HTML代码创建jQuery对象。



```js
var $div = $("<div/>")
var $span = $("<span>这是一个span</span>")
```

## JQuery对象

如上所述，jQuery对象时jQuery中新定义的对象，它像是一个用来存储DOM对象的数组（类型并不是Array）。可以通过length来获取其中DOM元素的数量，也可以通过索引来获取其中的某个元素。但是jQuery对象又并不是那么的简单，在它里边为我们提供了很多好用的方法，使我们可以快速的操作其中的DOM对象。

使用jQuery对象进行DOM操作时，无需再调用原生DOM的方法，直接调用jQuery对象的方法即可。通过jQuery对象进行修改操作时，会同时修改jQuery对象中的所有DOM对象，举个例子：



```html
<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script src="./script/jquery/jquery-3.6.1.min.js"></script>
    </head>
    <body>
        <ul>
            <li>孙悟空</li>
            <li>猪八戒</li>
            <li>沙和尚</li>
            <li>唐僧</li>
        </ul>
       
        <script>

            $("li").text("新值")

        </script>
    </body>
</html>
```

上例中，页面中有四个li，`$("li")`通过选择器获取页面中的所有li，`text()`是jQuery对象的方法用于获取或修改元素内部的文本内容。`$("li").text("新值")`调用后会修改所有的li中的文本内容。

这一特性被称为隐式迭代，隐式迭代的存在使得我们在修改多个DOM元素时不再需要遍历，一个方法即可修改所有元素。但是隐式迭代并不意外着不迭代不遍历，实际的遍历操作在jQuery对象内部完成。

jQuery对象的大部分方法都会将jQuery对象自身作为返回值，这意味着通过jQuery对象调用方法后，可以继续调用其他的方法，比如这样：



```html
<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script src="./script/jquery/jquery-3.6.1.min.js"></script>
    </head>
    <body>
        <ul>
            <li>孙悟空</li>
            <li>猪八戒</li>
            <li>沙和尚</li>
            <li>唐僧</li>
        </ul>

        <script>

            $("li").text("新的内容").css({color:"red"})

        </script>
    </body>
</html>
```

`$("li").text("新的内容").css({color:"red"})`在修改文本后继续修改jQuery对象的样式，这一特性被称为链式调用，通过链式调用可以一次性对jQuery对象做多个操作。

### 常用方法

addClass()

- 为jQuery对象添加一个或多个class

hasClass()

- 检查jQuery对象是否含有某个class

removeClass()

- 删除jQuery对象的指定class

toggleClass()

- 切换jQuery对象的指定class

------

clone()

- 复制jQuery元素

------

unwrap()

- 去除父元素

wrap()

- 添加父元素

wrapAll()

- 添加父元素

wrapInner()

- 在元素内部增加一层

------

append()

- 添加子元素

appendTo()

- 添加到父元素

prepend()

- 向前添加子元素

prependTo()

- 添加到父元素前

html()

- 读取或设置html代码

text()

- 读取或设置文本内容

------

after()

- 向后边添加元素

insertAfter()

- 将元素添加到某元素的后边

before()

- 向前边添加元素

insertBefore()

- 将元素添加到某元素的前边

------

detach()

- 删除元素（保留元素上的事件）

empty()

- 删除所有子元素

remove()

- 删除元素

------

replaceAll()

- 替换某个元素

replaceWith()

- 被某个元素替换

------

attr()

- 设置/获取元素的指定属性
- 布尔值属性会返回实际值

prop()

- 设置/获取元素的指定属性
- 布尔值属性会返回布尔值

removeAttr()

- 移除属性

removeProp()

- 移除属性

val()

- 设置/获取元素的value属性

------

css()

- 读取/设置元素的css样式

height()

- 读取/设置元素的高度

width()

- 读取/设置元素的宽度

innerHeight()

- 读取/设置元素的内部高度

innerWidth()

- 读取/设置元素的内部宽度

outerHeight()

- 读取/设置元素可见框的高度

outerWidth()

- 读取/设置元素可见框的宽度

offset()

- 读取/设置元素的偏移量

position()

- 读取元素相当于包含块的偏移量

scrollLeft()

- 读取/设置元素水平滚动条的位置

scrollTop()

- 读取/设置元素垂直滚动条的位置

------

eq()

- 获取指定索引的元素

even()

- 获取索引为偶数的元素

odd()

- 获取索引为奇数的元素

filter()

- 筛选元素

first()

- 获取第一个元素

last()

- 获取最后一个元素

has()

- 获取含有指定后代的元素

is()

- 检查是否含有某元素

map()

- 获取对象中的指定数据

slice()

- 截取元素（切片）

------

add()

- 创建包含当前元素的新的jQuery对象

addBack()

- 将之前操作的集合中的元素添加到当前集合中

contents()

- 获取当前jQuery对象的所有子节点（包括文本节点）

end()

- 将筛选过的列表恢复到之前的状态

not()

- 从列表中去除符合条件的元素

------

children()

- 获取子元素

closest()

- 获取离当前元素最近的指定元素

find()

- 查询指定的后代元素

next()

- 获取后一个兄弟元素

nextAll()

- 获取后边所有的兄弟元素

nextUntil()

- 获取后边指定位置的兄弟元素

offsetParent()

- 获取定位父元素

parent()

- 获取父元素

parents()

- 获取所有的祖先元素

parensUntil()

- 获取指定的祖先元素

prev()

- 获取前边的兄弟元素

prevAll()

- 获取前边所有的兄弟元素

prevUntil()

- 获取指定的兄弟元素

siblings()

- 获取所有的兄弟元素

