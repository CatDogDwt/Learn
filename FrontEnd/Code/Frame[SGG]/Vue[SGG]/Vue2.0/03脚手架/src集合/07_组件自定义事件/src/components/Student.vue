<template>
    <!-- 组件的结构 -->
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ gender }}</h2>
        <!-- <h2>当前求和为：{{ num }}</h2>
        <button @click="add">++</button> -->
        <!-- <br> -->
        <button @click="sendStudentName">把学生名给app</button>
        <button @click="unbind">解绑custom事件</button>
        <br>
        <button @click="death">销毁当前Student组件的实例vc</button>
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
            // num: 0
        }
    },
    methods: {
        // add() {
        //     console.log('add+++++++');
        //     this.num++
        // },
        sendStudentName() {
            //触发Student组件实例上的custom事件
            this.$emit('custom', this.name)
            //如果需要传递其他参数可以将参数包装成对象或者在父组件中使用扩展...xxx来解构到xxx
            // this.$emit('custom', this.name,{
            //     a:1,
            //     b:"2"
            // })
            // this.$emit('custom', this.name,1,2,3)
            this.$emit('demo')
        },
        unbind() {
            // this.$off('custom')//只适用于解绑一个自定义事件
            this.$off(['custom', 'demo'])//解绑多个自定义事件
            this.$off()//解绑所有自定义事件
        },
        death() {
            this.$destroy()//销毁后所有student实例的自定义事件全部失效
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