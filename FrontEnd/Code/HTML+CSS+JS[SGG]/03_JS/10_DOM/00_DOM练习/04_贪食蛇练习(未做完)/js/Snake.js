// let direction //定义一个变量 用来存储蛇的移动方向
// let scoreValue = 0//初始分数
// const snake = document.getElementsByClassName("snake")

// //键盘事件只能绑定给可以获取焦点的元素或document
// document.addEventListener("keydown", event => {
//     direction = event.key
// })

// BEGIN.addEventListener("click", () => {
//     if (BEGIN.textContent == "开始游戏") {
//         BEGIN.textContent = "结束游戏"
//         GAME("start")
//     } else if (BEGIN.textContent == "结束游戏") {
//         BEGIN.textContent = "开始游戏"
//         GAME("end")
//     } else {
//         alert("爬")
//         BEGIN.textContent = "开始游戏"
//     }
// })

// const GAME = (signal) => {
//     if (signal == "start") {
//         setTimeout(function move() {
//             //获取蛇头
//             const head = snake[0]
//             //获取蛇头坐标
//             let X = head.offsetLeft;
//             let Y = head.offsetTop
//             // const head
//             if (direction == 'w' || direction == 'ArrowUp') {
//                 Y -= 10
//             } else if (direction == 'a' || direction == 'ArrowLeft') {
//                 X -= 10
//             } else if (direction == 's' || direction == 'ArrowDown') {
//                 Y += 10
//             } else if (direction == 'd' || direction == ' ArrowRight') {
//                 X += 10
//             } else {
//                 X += 10
//             }
//             //检查蛇是否吃到食物
//             if (head.offsetTop === food.offsetTop - 1 && head.offsetLeft === food.offsetLeft - 1) {
//                 //改变食物位置
//                 const x = Math.floor(Math.random() * 29) * 10 //向下取整 生成0-280之间的随机10倍数
//                 const y = Math.floor(Math.random() * 29) * 10
//                 food.style.left = x + "px"
//                 food.style.top = y + "px"
//                 //增加蛇的身体
//                 const addBody = document.createElement("li")
//                 addBody.className = "snakeBody"
//                 snakeUL.appendChild(addBody)
//                 //吃一个100分
//                 scoreValue += 100
//                 score.textContent = `${scoreValue}`
//             }
//             //获取蛇尾

//             setTimeout(move, 300)
//         }, 300)
//     } else if (signal == "end") {
//         location.reload()
//     }
// }
/*
    1. 禁止掉头
    2. 游戏终止
    3. 记分
*/

// 获取蛇的容器
const snake = document.getElementById("snake")
// 获取蛇的各个部分
const snakes = snake.getElementsByTagName("div")

// 获取食物
const food = document.getElementById("food")

// 获取分数和level的span
const scoreSpan = document.getElementById("score")
const levelSpan = document.getElementById("level")

// 创建变量存储分数和等级
let score = 0
let level = 0


/*
    食物的坐标应该在0-290之间
*/
function changeFood() {
    // 生成0-29之间的随机数
    const x = Math.floor(Math.random() * 30) * 10
    const y = Math.floor(Math.random() * 30) * 10

    // 设置食物的坐标
    food.style.left = x + "px"
    food.style.top = y + "px"
}


// 定义一个变量用来存储蛇的移动的方向

let dir

// 创建一个变量来记录按键的状态
let keyActive = true

/*
    绑定按键事件keydown keyup
        - 键盘事件只能绑定给可以获取焦点的元素或者是document
*/

const keyArr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]

// 创建一个对象
const reObj = {
    ArrowUp: "ArrowDown",
    ArrowDown: "ArrowUp",
    ArrowLeft: "ArrowRight",
    ArrowRight: "ArrowLeft",
}

/*
    游戏禁止掉头：
        构成的要件：
            1. 身体超过2
            2. 不能是相反的方向
        处理：
            保持原来的方向不变（不修改dir的值）

*/
document.addEventListener("keydown", (event) => {
    if (keyActive && keyArr.includes(event.key)) {
        if (snakes.length < 2 || reObj[dir] !== event.key) {
            // 设置方向
            dir = event.key
            keyActive = false
        }
    }
})

/*
    要使得身体可以和头一起移动，只需要在蛇移动时，变化蛇尾巴的位置

*/

setTimeout(function move() {
    // 获取蛇头
    const head = snakes[0]

    // 获取蛇头的坐标
    let x = head.offsetLeft
    let y = head.offsetTop

    switch (dir) {
        case "ArrowUp":
            // 向上移动蛇
            y -= 10
            break
        case "ArrowDown":
            // 向下移动蛇
            y += 10
            break
        case "ArrowLeft":
            // 向左移动蛇
            x -= 10
            break
        case "ArrowRight":
            // 向右移动蛇
            x += 10
            break
    }

    // 检查蛇是否吃到食物
    if (
        head.offsetTop === food.offsetTop &&
        head.offsetLeft === food.offsetLeft
    ) {
        //1.改变食物的位置
        changeFood()
        //2.增加蛇的身体
        snake.insertAdjacentHTML("beforeend", "<div/>")
        score++
        scoreSpan.textContent = score

        // 检查等级
        if (score % 10 === 0 && level < 14) {
            level++
            levelSpan.textContent = level + 1
        }
    }

    /*
        判断游戏是否结束：
            1.撞墙
            2.撞自己
    */

    //判断是否撞墙
    if (x < 0 || x > 290 || y < 0 || y > 290) {
        alert("撞墙了！游戏结束！")
        // 游戏结束
        return
    }

    // 判断是否撞到自己
    for (let i = 0; i < snakes.length - 1; i++) {
        if (
            snakes[i].offsetLeft === x &&
            snakes[i].offsetTop === y
        ) {
            alert("撞到自己了，游戏结束！")
            return
        }
    }

    // 获取尾巴
    const tail = snakes[snakes.length - 1]
    // 移动蛇的位置
    tail.style.left = x + "px"
    tail.style.top = y + "px"
    // 将尾巴移动到蛇头的位置
    snake.insertAdjacentElement("afterbegin", tail)
    keyActive = true

    setTimeout(move, 300 - level * 20)
}, 300)