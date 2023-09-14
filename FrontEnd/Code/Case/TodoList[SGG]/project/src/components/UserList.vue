<template>
    <!-- 组件的结构 -->
    <div>
        <ul class="todo-main">
            <!-- <UserItem v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj" :reDoneList="reDoneList" :deleteObjItem="deleteObjList"></UserItem> -->
            <UserItem v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj"></UserItem>
            <!-- <UserItem v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj" :deleteObjItem="deleteObjList"></UserItem> -->
        </ul>
    </div>
</template>

<script>
import UserItem from './UserItem.vue';
//组件交互相关的代码（数据、方法等）
export default {
    name: 'UserList',
    components: {
        UserItem
    },
    props: [
        "todos",
        // "reDoneApp",
        // "deleteObj"
    ],
    methods: {
        // reDoneList(id,status) {
        //     this.reDoneApp(id,status)
        // }
        // reDoneList(id) {
        //     // this.reDoneApp(id)
        //     this.$emit('reDoneApp', id)
        // },
        // deleteObjList(id) {
        //     // this.deleteObj(id)
        //     this.$emit('deleteObj', id)
        // }
    },
};
</script>

<style scoped>
/*组件的样式*/
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>