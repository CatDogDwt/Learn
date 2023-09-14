<template>
    <!-- 组件的结构 -->
    <div>
        <button @click="getStudents">获取学生信息</button>
        <button @click="getCars">获取汽车信息</button>
    </div>
</template>

<script>
//引入组件
import axios from 'axios'
//组件交互相关的代码（数据、方法等）
export default {
    name: 'App',
    methods: {
        getStudents() {
            axios.get('http://localhost:8080/stu/students').then(
                response => {
                    console.log('请求成功！', response.data);
                },
                error => {
                    console.log('请求失败！', error.message);
                }
            )
        },
        getCars() {
            axios.get('http://localhost:8080/cars/Cars').then(
                response => {
                    console.log('请求成功！', response.data);
                },
                error => {
                    console.log('请求失败！', error.message);
                }
            )
        }
    },
};
</script>

<style>
/*组件的样式*/
</style>