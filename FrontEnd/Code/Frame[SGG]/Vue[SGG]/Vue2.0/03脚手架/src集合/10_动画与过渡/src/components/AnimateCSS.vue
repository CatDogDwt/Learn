<template>
    <!-- 组件的结构 -->
    <div>
        <h2>第三方动画库</h2>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <div>
            <transition name="animate__animated animate__bounce" appear enter-active-class="animate__backInRight"
                leave-active-class="animate__backOutUp">
                <h1 v-show="isShow">Mikasa</h1>
            </transition>
        </div>
    </div>
</template>

<script>

import 'animate.css';

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
    background-color: crimson;
    color: white;
    text-align: center;
    /* transition: 1.5s linear; */
}
</style>