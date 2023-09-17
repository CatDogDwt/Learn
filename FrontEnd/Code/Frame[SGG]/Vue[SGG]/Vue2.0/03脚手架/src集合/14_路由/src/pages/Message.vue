<template>
    <!-- 组件的结构 -->
    <div>
        <div>
            <ul>
                <li v-for="item in messageList" :key="item.id">
                    <!-- <a href="/message1">{{ item.message }}</a>&nbsp;&nbsp; -->
                    <!-- 跳转路由并携带query参数 to的字符串写法 -->
                    <!-- <router-link :to="`/home/message/detail?id=${item.id}&message=${item.message}`">{{ item.message }}</router-link> -->
                    <!-- <router-link :to="`/home/message/detail/${item.id}/${item.message}`">{{ item.message }}</router-link> -->
                    <!-- 跳转路由并携带query参数 to的对象写法 -->
                    <router-link :to="{
                        // path: '/home/message/detail',
                        name: 'DETAIL',
                        query: { id: item.id, message: item.message }
                    }">
                        {{ item.message }}
                    </router-link>
                    <!-- <router-link :to="{
                        name:'DETAIL',
                        params: { id: item.id, message: item.message }
                    }">
                        {{ item.message }}
                    </router-link> -->
                    <!-- <router-link :to="{
                        // path: '/home/message/detail',
                        name:'DETAIL',
                        query: { id: item.id, message: item.message }
                    }">
                        {{ item.message }}
                    </router-link> -->
                    <button @click="pushShow(item)">push查看</button>
                    <button @click="replaceShow(item)">replace查看</button>
                </li>
            </ul>
            <hr>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                { id: '001', message: '#1' },
                { id: '002', message: '#2' },
                { id: '003', message: '#3' },
            ]
        }
    },
    methods: {
        pushShow(item) {
            this.$router.push({
                name: 'DETAIL',
                query: { id: item.id, message: item.message }
            })
        },
        replaceShow(item) {
            this.$router.replace({
                name: 'DETAIL',
                query: { id: item.id, message: item.message }
            })
        }
    },
};
</script>

<style>
/*组件的样式*/
</style>