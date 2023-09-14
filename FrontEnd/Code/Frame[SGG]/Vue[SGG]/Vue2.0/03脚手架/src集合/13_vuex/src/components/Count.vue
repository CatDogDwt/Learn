<template>
    <!-- 组件的结构 -->
    <div>
        <!-- <h2>当前求和为：{{ $store.state.sum }}</h2> -->
        <h2>当前求和为：{{ sum }}</h2>
        <!-- <h2>当前求和放大十倍为：{{ $store.getters.bigSum }}</h2> -->
        <h2>当前求和放大十倍为：{{ bigSum }}</h2>
        <!-- <h2>我是{{ $store.state.rolename1 }}·{{ $store.state.rolename2 }}</h2> -->
        <h2>我是{{ rolename1 }}·{{ rolename2 }}</h2>
        <h3 style="color:red">Person组件总人数为：{{ personList.length }}</h3>
        <select v-model="num">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(num)">+</button>
        <button @click="decrement(num)">-</button>
        <button @click="incrementOdd(num)">当前求和为奇数再加</button>
        <button @click="incrementWait(num)">等一等再加</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'
//组件交互相关的代码（数据、方法等）
export default {
    name: 'Count',
    data() {
        return {
            num: 1,//用户选择的数字
        }
    },
    computed: {
        ...mapState('personOptions', ['personList']),
        ...mapState('countOptions', {
            sum: 'sum',
            rolename1: 'rolename1',
            rolename2: 'rolename2',
        }),//借助mapState生成计算属性，从state中读取数据 对象写法
        ...mapGetters('countOptions', [
            'bigSum'
        ])//借助mapGetters生成计算属性，从getters中加工数据 数组写法
        //注意 每个mapxxx均有两种写法 对象写法 数组写法(组件和store中的方法名必须相同)
    },
    methods: {
        ...mapActions('countOptions', [
            'incrementOdd',
            'incrementWait'
        ]),
        ...mapMutations('countOptions', {
            increment: '+',
            decrement: '-'
        })
        // increment() {
        //     this.$store.commit('+', this.num)
        // },
        // decrement() {
        //     this.$store.commit('-', this.num)
        // },
        // incrementOdd() {
        //     this.$store.dispatch('incrementOdd', this.num)
        // },
        // incrementWait() {
        //     this.$store.dispatch('incrementWait', this.num)
        // },
    },
};
</script>

<style>
/*组件的样式*/
button {
    margin: 5px;
}

select {
    width: 50px;
}
</style>