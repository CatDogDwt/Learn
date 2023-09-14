<template>
    <!-- 组件的结构 -->
    <div>
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>

//引入一个混合
import { showName } from '../mixin';

//组件交互相关的代码（数据、方法等）
export default {
    name: 'School',
    data() {
        return {
            name: 'XG',
            address: 'SJZ'
        }
    },
    mixins: [showName]
};
</script>

<style>
/*组件的样式*/
</style>