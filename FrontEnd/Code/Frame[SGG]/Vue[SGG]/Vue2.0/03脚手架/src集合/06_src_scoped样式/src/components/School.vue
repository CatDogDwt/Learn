<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>

//组件交互相关的代码（数据、方法等）
export default {
    name: 'School',
    data() {
        return {
            name: 'XG',
            address: 'SJZ'
        }
    },
};
</script>

<style scoped>
/*组件的样式*/
.demo {
    background-color: aquamarine;
}
</style>