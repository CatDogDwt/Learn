<template>
    <!-- 组件的结构 -->
    <div>
        <ul>
            <li :style="{ opacity }">欢迎学习vue</li>
            <li>news001<input type="text"></li>
            <li>news002<input type="text"></li>
            <li>news003<input type="text"></li>
        </ul>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
    name: 'News',
    data() {
        return {
            opacity: 1
        }
    },
    // beforeDestroy() {
    //     console.log('News组件即将被销毁');
    //     clearInterval(this.timer)
    // },
    // mounted() {

    //     this.timer = setInterval(() => {
    //         console.log('@');
    //         this.opacity -= 0.01
    //         if (this.opacity <= 0) this.opacity = 1
    //     }, 16);
    // }
    //路由独有的生命周期钩子
    activated() {//激活
        this.timer = setInterval(() => {
            // console.log('@');
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
        }, 16);
    },
    deactivated() {//失活
        console.log('News组件即将被销毁');
        clearInterval(this.timer)
    },
};
</script>

<style>
/*组件的样式*/
</style>