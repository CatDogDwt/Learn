<template>
    <!-- 组件的结构 -->
    <transition name="animate__animated animate__bounce" appear enter-active-class="animate__bounceInDown"
        leave-active-class="animate__zoomOut">
        <div>
            <li>
                <label>
                    <!-- <input type="checkbox" :checked="todoObj.done" @click="handleCheck(todoObj.id,!todoObj.done)" /> -->
                    <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)" />
                    <!-- 如下代码也能实现功能 但违反原则 修改了props里的数据 不推荐使用 -->
                    <!-- <input type="checkbox" v-model="todoObj.done" /> -->
                    <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
                    <input ref="editInput" v-show="todoObj.isEdit" type="text" :value="todoObj.title"
                        @blur="handleblur(todoObj, $event)" @keyup.enter="handleblur(todoObj, $event)">
                </label>
                <button class="btn btn-danger" @click="deleteObj(todoObj.id)">删除</button>

                <button v-show="!todoObj.isEdit" class="btn btn-editor" @click="editObj(todoObj)">编辑</button>
            </li>
        </div>
    </transition>
</template>

<script>

import pubsub from 'pubsub-js'
import 'animate.css';
//组件交互相关的代码（数据、方法等）
export default {
    name: 'UserItem',
    props: [
        "todoObj",
        // "reDoneList",
        // "deleteObjItem"
    ],
    methods: {
        // handleCheck(id,status){
        handleCheck(id) {
            //修改状态
            // this.reDoneList(id,status)
            // this.reDoneList(id)
            this.$bus.$emit('reDoneApp', id)
        },
        deleteObj(id) {
            // this.deleteObjItem(id)
            // this.$bus.$emit('deleteObj', id)
            //发布消息
            pubsub.publish('deleteObj', id)
        },
        editObj(todo) {
            todo.isEdit = true
            this.$nextTick(() => {
                this.$refs.editInput.focus()
            })
        },
        handleblur(todo, e) {
            todo.isEdit = false
            //失去焦点时保存
            if (!e.target.value.trim()) return alert('输入不能为空')
            this.$bus.$emit('edit', e.target.value, todo.id)
        },
    },
};
</script>

<style scoped>
/*组件的样式*/
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd !important;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
    margin-left: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: lightgray;
}

li:hover button {
    display: block;
}
</style>