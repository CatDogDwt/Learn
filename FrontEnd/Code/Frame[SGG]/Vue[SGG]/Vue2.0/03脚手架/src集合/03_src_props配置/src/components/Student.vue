<template>
    <!-- 组件的结构 -->
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ gender }}</h2>
        <h2>学生年龄：{{ AgeAdd }}</h2>
        <button @click="update">尝试修改接受的年龄数据</button>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Student',
    data() {
        return {
            msg: 'D',
            AgeAdd: this.age,
        }
    },
    methods: {
        update() {
            this.AgeAdd++
        }
    },
    // props: ['name', 'gender', 'age'] //简单接收

    // props:{ //接收数据时对类型进行限制
    //     name:String,
    //     age:Number,
    //     sex:String,
    // }

    props: { //接收数据时对类型进行限制+默认值指定+必要性的限制
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 99,
        },
        gender: {
            type: String,
            required: true
        }
    }
};
</script>

<style>
/*组件的样式*/
</style>