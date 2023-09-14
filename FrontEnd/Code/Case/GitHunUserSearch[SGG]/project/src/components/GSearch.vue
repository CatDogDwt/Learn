<template>
    <!-- 组件的结构 -->
    <div>
        <section class="jumbotron">
            <h3 class="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text" placeholder="enter the name you search" v-model="keyword" />&nbsp;<button
                    @click="search">Search</button>
            </div>
        </section>
    </div>
</template>

<script>

// import axios from 'axios'

//组件交互相关的代码（数据、方法等）
export default {
    name: 'BSearch',
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        search() {
            //请求前更新的List数据
            this.$bus.$emit('updateList', { isFirst: false, isLoading: true, errMsg: '', users: [] })
            this.$http.get(`http://api.github.com/search/users?q=${this.keyword}`).then(
                res => {
                    //请求成功后的List数据
                    this.$bus.$emit('updateList', { isLoading: false, errMsg: '', users: res.data.items })
                },
                error => {
                    //请求失败后的List数据
                    this.$bus.$emit('updateList', { isLoading: false, errMsg: error.message, users: [] })
                }
            )
        }
    },
};
</script>

<style scoped>
/*组件的样式*/
</style>