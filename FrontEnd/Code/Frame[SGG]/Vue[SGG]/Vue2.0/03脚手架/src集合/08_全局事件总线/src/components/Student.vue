<template>
    <!-- 组件的结构 -->
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ gender }}</h2>
        <button @click="sendStudneName">将student的学生名给school</button>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Student',
    data() {
        return {
            name: 'went',
            gender: '男',
        }
    },
    mounted() {

    },
    methods: {
        sendStudneName() {
            this.$bus.$emit('hello', this.name)
        }
    },
};
</script>

<style>
/*组件的样式*/
.student {
    background-color: bisque;
}
</style>