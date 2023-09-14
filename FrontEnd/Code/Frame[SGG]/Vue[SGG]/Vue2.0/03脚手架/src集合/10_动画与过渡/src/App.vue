<template>
    <!-- 组件的结构 -->
    <div>
        <Animation></Animation>
        <Transition></Transition>
        <AnimateCSS></AnimateCSS>
    </div>
</template>

<script>
//引入组件
import Animation from './components/Animation.vue';
import Transition from './components/Transition.vue';
import AnimateCSS from './components/AnimateCSS.vue';

//组件交互相关的代码（数据、方法等）
export default {
    name: 'App',
    components: {
        Animation,
        Transition,
        AnimateCSS
    }
};
</script>

<style>
/*组件的样式*/
</style>