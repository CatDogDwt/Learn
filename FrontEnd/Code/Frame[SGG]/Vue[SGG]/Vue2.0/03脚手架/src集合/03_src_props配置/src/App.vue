<template>
    <!-- 组件的结构 -->
    <div>
        <Student></Student>
        <hr>
        <Student name="went01" gender="未知01" :age="18"></Student>
        <hr>
        <Student name="went02" gender="未知02" age="未知02"></Student>
    </div>
</template>

<script>
//引入school组件
import Student from './components/Student.vue';

//组件交互相关的代码（数据、方法等）
export default {
    name: 'App',
    components: {
        Student,
    },
};
</script>

<style>
/*组件的样式*/
</style>