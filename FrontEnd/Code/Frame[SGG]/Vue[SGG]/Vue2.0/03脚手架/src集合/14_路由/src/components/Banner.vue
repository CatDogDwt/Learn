<template>
    <!-- 组件的结构 -->
    <div>
        <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header">
                <h2>Vue Router Demo</h2>
                <button @click="back">后退</button>
                <button @click="forward">前进</button>
            </div>
        </div>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Banner',
    methods: {
        back() {
            this.$router.back()
        },
        forward() {
            this.$router.forward()
        },
    }
};
</script>

<style>
/*组件的样式*/
</style>