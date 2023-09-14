<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ gender }}</h2>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Student',
    data() {
        return {
            name: 'went',
            gender: '男'
        }
    },
};
</script>

<style>
/*组件的样式*/
.demo {
    background-color: bisque;
}
</style>