<template>
    <!-- 组件的结构 -->
    <div class="child">
        <h3>child(子)</h3>
        <Son></Son>
    </div>
</template>
    
<script>
import Son from './Son'
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Child',
    components: {
        Son
    },
};
</script>
    
<style>
/*组件的样式*/
.child {
    background-color: cadetblue;
    padding: 10px;
}
</style>