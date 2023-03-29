![img](https://raw.githubusercontent.com/CatDogDwt/IHS/master/JavaScript/202303291002217.png)

# DOM

## 为什么需要DOM

前边我们所学习的JS基础课程，学习了JS的基础知识。但是在学习过程中你会发现，似乎JS和网页并没有太大的关系。换句话说，我们所编写的JS代码，除了是写在网页中以外，并没有和网页产生任何实质的联系。如果JS不能操作网页，那么对于我们来说它就是一个废物，没有任何的使用价值。所以我们就需要一个新的技术，一个可以让我们使用JS来操作网页的技术，也就是DOM。

## 什么是DOM

DOM，全称Document Object Model，中文翻译为文档对象模型。DOM属于Web API的一部分。Web API中定义了非常多的对象，通过这些对象可以完成对网页的各种操作（添加删除元素、发送请求、操作浏览器等）。

DOM中的D意为Document，即文档。所谓文档就是指整个网页，换言之，DOM是用来操作网页的。O意为Object，即对象。DOM将网页中的每一部分内容都转换为了对象，div有div的对象，input有input的对象，甚至一段文本，一段注释也有其所对应的对象。转换为对象干什么？还记得面向对象吗？转换对象以后，我们就可以以面向对象的方式去操作网页，想要操作哪个元素就获取哪个元素的对象，然后通过调用其方法或属性完成各种操作。M意为Model，即模型。模型用来表示对象之间的关系，也就是父子元素、祖先后代、兄弟元素等，明确关系后我们便可以通过任意一个对象去获取其他的对象。



```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <title>My Title</title>
</head>
<body>
    <h1>A Heading</h1>
    <a href="#">Link Text</a>
</body>
</html>
```

![img](https://raw.githubusercontent.com/CatDogDwt/IHS/master/JavaScript/202303291003262.png)

## 概念

### 节点（Node）

在DOM标准下，网页中的每一个部分都会转换为对象。这些对象有一个共同的称呼——节点（Node）。一个页面将会由多个节点构成，虽然都称为节点，但是它们却有着不同的类型：

1. 文档节点
2. 元素节点
3. 文本节点
4. 属性节点
5. …

每一个节点都有其不同的作用，文档节点表示整个网页，元素节点表示某个标签，文本节点表示网页中的文本内容，属性节点表示标签中的各种属性。如果从对象的结构上来讲，这些对象都有一个共同的父类Node。总的来说，都是属于节点，但是具体类型不同。

### 关系

- 祖先 —— 包含后代元素的元素是祖先元素
- 后代 —— 被祖先元素包含的元素是后代元素
- 父 —— 直接包含子元素的元素是父元素
- 子 —— 直接被父元素包含的元素是子元素
- 兄弟 —— 拥有相同父元素的元素是兄弟元素

## 如何使用DOM

面向对象的编程语言，无非就是两个步骤：1.找对象。2.搞对象。所以使用DOM我们首先要先拿到一个DOM对象，然后以该对象为切入点来完成各种操作。

### Document对象

Document对象代表的是整个的网页，在浏览器中它是window对象的属性（也就是全局变量），它也是我们所有DOM操作的切入点，实际上之前我们也使用过它，还记得`document.write()`吗？现在你可以尝试在控制台中打印document，看看它还在不在？如果它还在那么你需要记住，它代表的是整个网页，它的子元素是html。

从现在开始我们实际上进入了宿主对象的学习，DOM就是一种宿主对象，即由运行环境（浏览器）提供的对象。对象的复杂程度也开始提升，我们先来看看document的继承关系：

![img](https://raw.githubusercontent.com/CatDogDwt/IHS/master/JavaScript/202303291004977.png)

在标准中，Document继承了Node，Node继承了EventTarget，换言之EventTarget、Node以及Document中所定义的方法document都可以调用，它在浏览器中的实际结构会更复杂一些，这里我们暂时不过多的赘述。

### Element对象

在网页中所有的元素（标签）都是一个Element对象。Element对象的继承关系和Document类似：

![img](https://raw.githubusercontent.com/CatDogDwt/IHS/master/JavaScript/202303291009843.png)

可以通过Document或其他元素直接获取已有的Element对象，也可以使用Document来创建新的Element对象。我们先来看看如何通过document获取已有的Element对象。

- `document.documentElement` 获取html根元素
- `document.body` 获取body元素
- `document.getElementByID()` 根据id获取一个元素
- `document.getElementsByClassName()` 根据class属性获取元素（实时更新列表）
- `document.getElementsByTagName()` 根据标签名获取元素（实时更新列表）
- `document.getElementsByName()` 根据name属性获取元素（实时更新列表）
- `document.querySelector()` 根据选择器获取一个元素
- `document.querySelectorAll()` 根据选择器获取一组元素

通过其他元素获取已有的Element对象：

- `element.children`
- `element.parentNode`
- `element.firstElementChild`
- `element.lastElementChild`
- ……

创建Element对象：

- `document.createElement()` 根据标签名创建元素节点对象

### 文本

在DOM中，文本内容也是一个节点对象（Text），可以通过获取文本对象然后完成对它的各种操作，但这种做法会使得事情变得复杂，并不建议这么做。在大部分场景下，可以通过元素的属性来操作其中的文本内容，比如有如下文本：



```html
<div>div中的文本内容</div>
```

假设我们已经获取到了div的元素节点对象，我们可以通过以下的属性来完成对文本的操作：

- `element.textContent`
- `element.innerText`
- `element.innerHTML`

### 属性

属性也是一个节点对象（Attr），和文本一样，通常我们不会去直接获取节点对象，而是通过元素来完成对属性的操作：

- `element.attrName`
- `element.getAttribute(attrName)`
- `element.setAttribute(name, value)`

## 事件（Event）

事件指用户和网页之间发生的交互行为。比如点击按钮、移动鼠标、改变窗口大小、表单输入等等等等，用户的所有操作都可以被当成是一个事件。JS中通过为事件绑定回调函数来处理事件，绑定回调函数后，事件触发后回调函数便会执行，以此来响应用户的行为，所以事件的回调函数我们也称其为事件的响应函数。

### 绑定回调函数

1. 通过标签的事件属性
2. 通过元素对象的事件属性
3. 通过元素addEventListener()方法

方式一：



```html
<button type="button" onclick="alert('按钮被点了！')">点我一下</button>
```

方式二：



```js
const btn = document.getElementById("btn")
btn.onclick = function(){
    alert("按钮被点击了！")
}
```

方式三：



```js
const btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    alert("按钮被点了")
})
```

关于事件，还有很多的内容可以讲解，我们会在后边的课程中进行补充。

## 文档加载事件

在网页中编写DOM代码时，如果依然将script标签编写到head中，会有无法获取DOM对象情况出现。这是因为网页的加载是自上向下依次加载的，如果将代码写在前边会导致代码执行时网页还没有加载，DOM对象也就无法获取了。

如何解决这个问题呢？有这么几种方案：

1. 将script标签写在body的最后
2. 将js代码编写到window.onload事件的回调函数中
3. 将js代码编写到document对象的DOMContentLoaded事件的回调函数中
4. 将js代码编写到外部的js文件中，引入时为script标签添加defer属性

方式一：



```html
<!DOCTYPE html>
<html lang="zh">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <button type="button" id="btn">点我一下</button>

        <script>
            const btn = document.getElementById("btn")
            btn.addEventListener("click", function () {
                alert("按钮被点了")
            })
        </script>
    </body>
</html>
```

代码编写到了body的最后，代码执行时网页已经加载完毕了，不会出现无法获取DOM对象的问题。

方式二：



```js
window.onload = () => {
    const btn = document.getElementById("btn")
    btn.addEventListener("click", function () {
        alert("按钮被点了")
    })
}
```



```js
window.addEventListener("load", () => {
    const btn = document.getElementById("btn")
    btn.addEventListener("click", function () {
        alert("按钮被点了")
    })
})
```

将js代码编写到window的load事件的回调函数中，load事件会在页面加载完毕后触发，同样可以避免上述问题。

方式三：



```js
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn")
    btn.addEventListener("click", function () {
        alert("按钮被点了")
    })
})
```

将js代码编写到document的DOMContentLoaded事件的回调函数中，代码会在当前文档加载完毕后执行也可以避免上述情况。（相较于load事件，DOMContentLoaded事件的执行更早一些）

方式四：



```html
<script src="./script.js" defer></script>
```

设置defer后，脚本将会在文档解析之后加载，同样可以避免上述问题。（执行时机早于DOMContentLoaded）