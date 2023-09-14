<template>
    <!-- 组件的结构 -->
    <div class="container">
        <Category :listdata="foods" title="美食">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            <a slot="footer" href="https://www.bilibili.com">bilibili</a>
        </Category>
        <Category :listdata="games" title="游戏">
            <!-- <template scope="games">this api replaced by slot-scope in 2.5.0+ 作用域插槽-->
            <template slot-scope="{games}"><!-- this api replaced by slot-scope in 2.5.0+ -->
                <ul slot="center">
                    <li v-for="(item, index) in games" :key="index">{{ item }}</li>
                </ul>
            </template>
            <a slot="footer" href="https://ff.web.sdo.com/web8/index.html#/home">ffxiv</a>
        </Category>
        <Category :listdata="characters" title="角色">
            <video slot="center" controls autoplay src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <!-- <template v-slot="footer"> -->
            <div>
                <a slot="footer" href="https://www.bilibili.com">bilibili</a>
                <a slot="footer" href="https://www.bilibili.com">bilibili</a>
                <a slot="footer" href="https://www.bilibili.com">bilibili</a>
            </div>
            <!-- </template> -->
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue';
//组件交互相关的代码（数据、方法等）
export default {
    name: 'App',
    components: {
        Category
    }
};
</script>

<style>
/*组件的样式*/
.container {
    display: flex;
    justify-content: space-around;
}

img,
video {
    width: 200px;
}

a {
    text-align: center;
    display: flex;
    justify-content: center;
}
</style>