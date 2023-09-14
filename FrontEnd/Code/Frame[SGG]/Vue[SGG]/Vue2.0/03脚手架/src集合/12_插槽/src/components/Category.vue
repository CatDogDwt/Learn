<template>
    <!-- 组件的结构 -->
    <div class="c">
        <h3>{{ title }}分类</h3>
        <!-- 定义一个插槽 等待使用者填充 -->
        <slot :games="games" name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>

        <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Category',
    props: [
        'listdata',
        'title'
    ],
    data() {
        return {
            games: ['最终幻想XIV', '塞尔达传说', '生化危机', '超级马里奥'],
        }
    }
};
</script>

<style>
/*组件的样式*/
.c{
    background-color: brown;
    height: 300px;
    width: 200px;
    margin: 200px auto;
}

h3 {
    text-align: center;
    background-color: beige;
}
</style>