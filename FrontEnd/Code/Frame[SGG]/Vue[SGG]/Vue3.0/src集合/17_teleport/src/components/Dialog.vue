<template>
    <div>
        <button @click="isShow = true">弹窗</button>
        <teleport to='#keng'>
            <div v-if="isShow" class="mask">
                <div class="dialog">
                    <h3>我是谁？</h3>
                    <h3>我是谁？</h3>
                    <h3>我是谁？</h3>
                    <button @click="isShow = false">关闭弹窗</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
import { ref } from "vue";
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Dialog',
    setup() {
        let isShow = ref(false)

        return { isShow }
    }
};
</script>

<style>
/*组件的样式*/
.mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .2);
}

.dialog {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    height: 300px;
    width: 300px;
    background-color: green;
}
</style>