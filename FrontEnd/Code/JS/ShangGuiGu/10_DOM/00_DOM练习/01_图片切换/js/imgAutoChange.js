const left = document.getElementsByClassName("ib_left_select");//上一个
const right = document.getElementsByClassName("ib_right_select");//下一个
const bottom = document.getElementsByClassName("ib_bottom_select")[0].children[0].children;//底部li
const bottomUl = document.getElementsByClassName("ib_bottom_select")
const img = document.getElementsByTagName("img");//图片集合
const imgLength = img.length - 1;
const bottomLength = bottom.length;
let imgArr = [];
let imgArrLength = 1;

//使用getElementsByClassName获取的是类数组 在使用时需注意添加索引
left[0].onclick = () => {//点击切换上一个
    change("pervious");
}

right[0].onclick = () => {//点击切换下一个
    change("next");
}

//底部li标签click事件初始化
(function IiId() {
    for (let i = 0; i < bottomLength; i++) {
        bottom[i].setAttribute("id", `${i}`);//绑定id
        imgArr[0] = 0;//图片数组下标初始化
        bottom[0].className = 'lihover';//底部选项首张背景色
        document.getElementById(`${i}`).onclick = () => change("", i)//为每个li绑定点击事件
    }
}())

const changeClosure = () => {
    //初始化
    let i = 0;//设置切换标签

    return (nextOrPervious, value) => {
        if (nextOrPervious == "next") {
            i > imgLength - 1 ? i = 0 : ++i;//0 1 2 3 4 5 6 7 8...
            //使下一张图片的z-index为1
            img[i].style.zIndex = 1;
            //使上一个图片的z-index为0
            img[i != 0 ? i - 1 : imgLength].style.zIndex = 0;
            //底部选项样式
            bottom[i].className = 'lihover';
            bottom[i != 0 ? i - 1 : imgLength].className = 'linormal';
            //存储每次点击的i
            imgArrFunction(i);
        } else if (nextOrPervious == "pervious") {
            i > 0 ? --i : i = imgLength;//7 6 5 4 3 2 1 0 8...
            //使上一张图片的z-index为1
            img[i].style.zIndex = 1;
            //使下一张图片的z-index为0
            img[i != 8 ? i + 1 : 0].style.zIndex = 0;
            //底部选项样式
            bottom[i].className = 'lihover';
            bottom[i != 8 ? i + 1 : 0].className = 'linormal';
            //存储每次点击的i
            imgArrFunction(i);
        } else {
            //使本次点击图片的z-index为1
            img[value].style.zIndex = 1;
            //存储每次点击的i
            imgArrFunction(value);
            //使上一个图片的z-index为0
            img[imgArr[0]].style.zIndex = 0;
            //设置li样式
            bottom[value].className = 'lihover';
            bottom[imgArr[0]].className = 'linormal';
            i = value;
        }
    }
}

const change = changeClosure();

const imgArrFunction = (value) => {
    if (imgArrLength > 1) {
        imgArr[0] = imgArr[1];//将上一次点击的i存储到索引为0的位置
        imgArrLength = 1;//将本次点击的i存储到索引为1的位置
    }
    imgArr[imgArrLength] = value;
    imgArrLength++;
}

setTimeout(function AutoNext() {
    change("next");
    setTimeout(AutoNext, 3000)
}, 3000);