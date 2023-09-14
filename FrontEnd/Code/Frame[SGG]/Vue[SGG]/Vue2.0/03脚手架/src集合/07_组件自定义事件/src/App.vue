<template>
    <!-- 组件的结构 -->
    <div class="app">
        <h1>{{ msg }}</h1>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
        <!-- <Student v-on:custom="getStudentName"></Student> -->
        <!-- 简写 -->
        <!-- <Student @custom="getStudentName" @demo="m1"></Student> -->
        <!-- <Student @custom.once="getStudentName"></Student> -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 （使用ref 灵活性强 比如等待ajax请求完毕） -->
        <Student ref="student" @click.native="demo"></Student>
        <hr>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"></School>
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
    methods: {
        getSchoolName(name) {
            console.log('App收到了学校名', name);
        },
        getStudentName(name) {
            console.log('App收到了学生名', name);
        },
        // getStudentName(name,params) {
        //     console.log('App收到了学生名', name,params);
        // }
        // getStudentName(name,...params) {
        //     console.log('App收到了学生名', name,params);
        // }
        // m1(){
        //   console.log('m1被触发');  
        // }
        demo(){
            alert('原生dom')
        }
    },
    //Vue完成模板的解析并把初始的真实dom元素放入页面后(挂载完毕)调用
    mounted() {
        setTimeout(() => {//延时3s
            this.$refs.student.$on('custom', this.getStudentName)
            // this.$refs.student.$once('custom', this.getStudentName)//只触发一次
        }, 3000);
    },
};
</script>

<style scoped>
/*组件的样式*/
.app {
    background-color: blanchedalmond;
}
</style>