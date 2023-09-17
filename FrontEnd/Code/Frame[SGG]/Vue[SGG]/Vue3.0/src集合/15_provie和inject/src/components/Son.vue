<template>
    <!-- 组件的结构 -->
    <div class="Son">
        <h3>Son(孙) {{name}} {{age}}</h3>
    </div>
</template>
    
<script>
import { inject, toRefs } from "vue";
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Son',
    setup() {
        let role = inject('role')
        return { ...toRefs(role) }
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