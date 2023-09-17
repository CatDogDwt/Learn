<template>
    <!-- 组件的结构 -->
    <div>
        <div>
            <h2>Home组件内容</h2>
            <div>
                <ul class="nav nav-tabs">
                    <li>
                        <!-- <a class="list-group-item active" href="./home-news.html">News</a> -->
                        <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                    </li>
                    <li>
                        <!-- <a class="list-group-item " href="./home-message.html">Message</a> -->
                        <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                    </li>
                </ul>
                <keep-alive include="News"><!-- 组件名 不是陆幽明 -->
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>

//组件交互相关的代码（数据、方法等）
export default {
    name: 'Home',
};
</script>

<style>
/*组件的样式*/
</style>