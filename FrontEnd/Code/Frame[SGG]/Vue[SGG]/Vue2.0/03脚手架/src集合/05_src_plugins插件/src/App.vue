<template>
    <!-- 组件的结构 -->
    <div>
        <Student></Student>
        <hr>
        <School></School>
    </div>
</template>

<script>
//引入school组件
import Student from './components/Student.vue';
import School from './components/School.vue';

//组件交互相关的代码（数据、方法等）
export default {
    name: 'App',
    components: {
        Student,
        School
    },
};
</script>

<style>
/*组件的样式*/
</style>