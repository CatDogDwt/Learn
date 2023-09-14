<template>
    <!-- 组件的结构 -->
    <div class="app">
        <h1>{{ msg }}</h1>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
//引入组件
import School from './components/School.vue';
import Student from './components/Student.vue';


//组件交互相关的代码（数据、方法等）
export default {
    name: 'App',
    components: {
        Student,
        School
    },
    data() {
        return {
            msg: '你好阿'
        }
    },
};
</script>

<style scoped>
/*组件的样式*/
.app {
    background-color: blanchedalmond;
}
</style>