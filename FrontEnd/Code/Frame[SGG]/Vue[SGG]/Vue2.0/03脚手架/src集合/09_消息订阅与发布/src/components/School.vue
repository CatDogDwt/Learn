<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>

import pubsub from 'pubsub-js';

//组件交互相关的代码（数据、方法等）
export default {
    name: 'School',
    data() {
        return {
            name: 'XG',
            address: 'SJZ'
        }
    },
    mounted() {
        //订阅消息
        const pubid = pubsub.subscribe('name', (msgName, data) => {
            console.log('name消息被发布--->获得了学生姓名', data);
        })
    },
    beforeDestroy() {
        //需要通过id销毁
        pubsub.unsubscribe(this.pubid)
    }
};
</script>

<style scoped>
/*组件的样式*/
.school {
    background-color: aquamarine;
}
</style>