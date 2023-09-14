<template>
    <!-- 组件的结构 -->
    <div>
        <Count></Count>
        <Person></Person>
    </div>
</template>

<script>
import Count from './components/Count.vue';
import Person from './components/Person.vue';
//组件交互相关的代码（数据、方法等）
export default {
    name: 'App',
    components: {
        Count,
        Person
    }
};
</script>

<style>
/*组件的样式*/
</style>