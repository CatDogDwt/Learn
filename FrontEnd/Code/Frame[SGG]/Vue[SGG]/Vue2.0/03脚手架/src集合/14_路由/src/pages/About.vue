<template>
    <!-- 组件的结构 -->
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>

<script>

//组件交互相关的代码（数据、方法等）
export default {
    name: 'About',
    //通过路由规则 进入该组件时被调用
    beforeRouteEnter(to, from, next) {
        //...和其它路由守卫类似
        console.log('e', to, from);
        next()
    },
    //通过路由规则 离开该组件时被调用
    beforeRouteLeave(to, from, next) {
        console.log('l', to, from);
        //  和其他路由守卫类似
        next()
    }
};
</script>

<style>
/*组件的样式*/
</style>