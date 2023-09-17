<template>
    <!-- 组件的结构 -->
    <div class="Son">
        <h3>Son</h3>
        <Dialog></Dialog>
    </div>
</template>
    
<script>
import Dialog from './Dialog.vue'
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Son',
    components:{
        Dialog
    }
};
</script>
    
<style>
/*组件的样式*/
.Son {
    background-color: chocolate;
    padding: 10px;
}
</style>