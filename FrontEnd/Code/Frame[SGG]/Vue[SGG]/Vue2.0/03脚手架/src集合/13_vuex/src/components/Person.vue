<template>
    <!-- 组件的结构 -->
    <div>
        <h2>人员列表</h2>
        <h3 style="color:red">Count组件求和为：{{ sum }}</h3>
        <input type="text" placeholder="请输入名字" v-model="pname">
        <button @click="add(pname)">添加</button>
        <ul v-for="p in personList">
            <li>{{ p }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Person',
    data() {
        return {
            pname: ''
        }
    },
    computed: {
        ...mapState('countOptions',['sum']),
        ...mapState('personOptions', ['personList']),
    },
    methods: {
        ...mapMutations('personOptions',['add'])
    },
};
</script>

<style>
/*组件的样式*/
</style>