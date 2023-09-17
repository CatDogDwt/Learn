<template>
    <!-- 组件的结构 -->
    <div>
        <ul>
            <!-- <li>消息编号:{{this.$route.query.id}}</li>
            <li>消息标题:{{this.$route.query.message}}</li> -->
            <!-- <li>消息编号:{{ $route.params.id }}</li>
            <li>消息标题:{{ $route.params.message }}</li> -->
            <li>消息编号:{{ id }}</li>
            <li>消息标题:{{ message }}</li>
        </ul>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Detail',
    // props:['a','b']
    props:['id','message']
};
</script>

<style>
/*组件的样式*/
</style>