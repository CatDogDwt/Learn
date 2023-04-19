let topNumber = 10
let leftNumber = 10
let direction //定义一个变量 用来存储蛇的移动方向

//键盘事件只能绑定给可以获取焦点的元素或document
document.addEventListener("keydown", event => {
    direction = event.key
})

BEGIN.addEventListener("click", () => {
    if (BEGIN.textContent == "开始游戏") {
        BEGIN.textContent = "结束游戏"
        GAME("start")
    } else if (BEGIN.textContent == "结束游戏") {
        BEGIN.textContent = "开始游戏"
        GAME("end")
    } else {
        alert("爬")
        BEGIN.textContent = "开始游戏"
    }
})

const GAME = (signal) => {
    if (signal == "start") {
        setTimeout(function move() {
            if (direction == 'w' || direction == 'ArrowUp') {
                topNumber -= 10
                snake.style.top = topNumber + 'px';
            } else if (direction == 'a' || direction == 'ArrowLeft') {
                leftNumber -= 10
                snake.style.left = leftNumber + 'px';
            } else if (direction == 's' || direction == 'ArrowDown') {
                topNumber += 10
                snake.style.top = topNumber + 'px';
            } else if (direction == 'd' || direction == ' ArrowRight') {
                leftNumber += 10
                snake.style.left = leftNumber + 'px';
            } else {
                leftNumber += 10
                snake.style.left = leftNumber + 'px';
            }
            let foodPosition = food.offsetLeft + food.offsetTop
            let snakeHeadPosition = snakeHead.left + snakeHead.top
            console.log("f--", foodPosition);
            console.log("s--", snakeHeadPosition);
            if (foodPosition == snakeHeadPosition) {
                console.log("吃到了！");
            }
            setTimeout(move, 300)
        }, 300)
    } else if (signal == "end") {
        location.reload()
    }
}
