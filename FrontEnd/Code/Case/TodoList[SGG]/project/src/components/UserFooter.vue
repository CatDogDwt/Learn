<template>
    <!-- 组件的结构 -->
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" :click="checkAll" /> -->
            <input type="checkbox" :checked="isAll" @click="checkAll" />
        </label>
        <span>
            <span>已完成 {{ done }} </span> / 全部 {{ total }}
        </span>
        <!-- <button class="btn btn-danger" :click="deleteAllDone">清除已完成任务</button> -->
        <button class="btn btn-danger" @click="deleteAllDone">清除已完成任务</button>
    </div>
</template>

<script>

//组件交互相关的代码（数据、方法等）
export default {
    name: 'UserFooter',
    props: [
        "todos",
        // "checkAllTodo",
        // "clearAll"
    ],
    computed: {
        total() {
            return this.todos.length
        },
        done() {
            /*
                reduce((pre上一次的初始值,current当前的值)=>{},初始值) 数组中有几个值调用几次
                第一次调用得到pre为设置的初始值 下一次调用得到的pre为上一次调用此箭头函数的返回值
                最后一次调用箭头函数的返回值是整个reduce的返回值
            */
            return this.todos.reduce((pre, current) => {//这里的current为todo项
                return pre + (current.done ? 1 : 0);
            }, 0)
        },
        isAll() {
            return this.done === this.total && this.total > 0;
        }
    },
    methods: {
        checkAll(e) {
            // this.checkAllTodo(e.target.checked)
            this.$emit('checkAllTodo', e.target.checked)
        },
        deleteAllDone() {
            // this.clearAll()
            this.$emit('clearAll')
        }
    },
};
</script>

<style scoped>
/*组件的样式*/
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>