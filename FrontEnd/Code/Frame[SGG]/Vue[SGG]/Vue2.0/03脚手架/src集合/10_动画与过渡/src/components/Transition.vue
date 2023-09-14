<template>
    <!-- 组件的结构 -->
    <div>
        <h2>过渡</h2>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <div>
            <transition name="haha" appear>
                <h1 v-show="isShow">Zelda</h1>
            </transition>
            <transition-group name="hahaha" appear>
                <h1 class="h11" v-show="isShow" key="1">Zelda</h1>
                <h1 class="h11" v-show="isShow" key="2">Zelda</h1>
            </transition-group>
        </div>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Test',
    data() {
        return {
            isShow: true,
        }
    }
};
</script>

<style scoped>
/*组件的样式*/
h1 {
    background-color: chocolate;
    color: white;
    text-align: center;
    /* transition: 1.5s linear; */
}

.h11 {
    background-color: cornsilk;
    color: white;
    text-align: center;
}

/*进入的起点 */
.haha-enter {
    transform: translateX(-100%);
}

/*进入的终点 和 离开的起点*/
.haha-enter-to,
.haha-leave {
    transform: translateX(0%);
}

.haha-enter-active,
.haha-leave-active {
    transition: 1.5s linear;
}

/*离开的起点 */
/* .haha-leave {
    transform: translateX(0%);
} */
/*离开的终点 */
.haha-leave-to {
    transform: translateX(100%);
}



/*进入的起点 */
.hahaha-enter {
    transform: translateX(100%);
}

/*进入的终点 和 离开的起点*/
.hahaha-enter-to,
.hahaha-leave {
    transform: translateX(0%);
}

.hahaha-enter-active,
.hahaha-leave-active {
    transition: 1.5s linear;
}

/*离开的起点 */
/* .haha-leave {
    transform: translateX(0%);
} */
/*离开的终点 */
.hahaha-leave-to {
    transform: translateX(-100%);
}
</style>