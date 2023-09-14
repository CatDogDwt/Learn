<template>
    <!-- 组件的结构 -->
    <div>
        <h2>动画</h2>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <div class="box1">
            <transition appear>
                <h1 v-show="isShow">Takanashi</h1>
            </transition>
        </div>
        <!-- 指定名称 -->
        <div class="box2">
            <transition name="haha" appear>
                <h1 v-show="!isShow">Rikka</h1>
            </transition>
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
    background-color: brown;
    color: white;
    text-align: center;
}

.box1,
.box2 {
    height: 50px
}

.v-enter-active {
    animation: dynamicEnter 1.5s;
}

.v-leave-active {
    animation: dynamicLeave 1.5s;
}

.haha-enter-active {
    animation: dynamicEnter2 1.5s;
}

.haha-leave-active {
    animation: dynamicLeave2 1.5s;
}

@keyframes dynamicEnter {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0%);
    }
}

@keyframes dynamicLeave {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(100%);
    }
}

@keyframes dynamicEnter2 {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0%);
    }
}

@keyframes dynamicLeave2 {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-100%);
    }
}
</style>