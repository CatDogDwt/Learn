<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>

//组件交互相关的代码（数据、方法等）
export default {
    name: 'School',
    data() {
        return {
            name: 'XG',
            address: 'SJZ'
        }
    },
    mounted() {
        // console.log('School',this);
        this.$bus.$on('hello',data=>{
            console.log('我是school组件，收到了数据',data);
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    }
};
</script>

<style scoped>
/*组件的样式*/
.school {
    background-color: aquamarine;
}
</style>