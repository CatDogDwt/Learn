<template>
    <!-- 组件的结构 -->
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">click</button>
        <School ref="school"></School>
    </div>
</template>

<script>
//引入school组件
import School from './components/School.vue';

//组件交互相关的代码（数据、方法等）
export default {
    name: 'App',
    components: {
        School,
    },
    data() {
        return {
            msg: 'Hello World',
        }
    },
    methods: {
        showDOM() {
            console.log(this.$refs.title);//真实DOM元素
            console.log(this.$refs.btn);//真实DOM元素
            console.log(this.$refs.school);//school组件的实例对象
        }
    },
};
</script>

<style>
/*组件的样式*/
</style>