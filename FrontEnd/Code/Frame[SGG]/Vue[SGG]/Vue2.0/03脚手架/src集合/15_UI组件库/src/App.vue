<template>
    <!-- 组件的结构 -->
    <div>
        <button>原初的按钮</button>
        <input type="text">
        <br>
        <br>
        <el-row>
            <dbtn>默认按钮</dbtn>
            <dbtn type="primary">主要按钮</dbtn>
            <dbtn type="success">成功按钮</dbtn>
            <dbtn type="info">信息按钮</dbtn>
            <dbtn type="warning">警告按钮</dbtn>
            <dbtn type="danger">危险按钮</dbtn>
        </el-row>
        <br>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
    </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
    name: 'App',
    data() {
        return {
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            value1: '',
            value2: '',
        };
    }
};
</script>

<style>
/*组件的样式*/
</style>