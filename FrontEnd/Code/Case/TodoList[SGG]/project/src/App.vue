<template>
  <!-- <div id="app"> -->
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- <UserHeader :receive="receive"></UserHeader> -->
        <UserHeader @receive="receive"></UserHeader>
        <!-- <UserList :todos="todos" :reDoneApp="reDoneApp" :deleteObj="deleteObj"></UserList> -->
        <!-- <UserList :todos="todos" @reDoneApp="reDoneApp" @deleteObj="deleteObj"></UserList> -->
        <UserList :todos="todos"></UserList>
        <!-- <UserList :todos="todos"></UserList> -->
        <!-- <UserFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAll="clearAll"></UserFooter> -->
        <UserFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAll="clearAll"></UserFooter>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>

import UserHeader from './components/UserHeader.vue';
import UserList from './components/UserList.vue';
import UserFooter from './components/UserFooter.vue';

//第三方
import pubsub from 'pubsub-js'

export default {
  name: 'App',
  components: {
    UserFooter,
    UserHeader,
    UserList
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    }
  },
  methods: {
    receive(todos) {
      this.todos.unshift(todos);
    },
    // reDoneApp(id, status) {
    reDoneApp(id) {
      // for (let i = 0; i < this.todos.length; i++) {
      //   console.log(this.todos[i]);
      //   if (this.todos[i].id === id) {
      //     this.todos[i].done = status
      //     if (status === true) {
      //       this.done++;
      //     } else {
      //       this.done--;
      //     }
      //   }
      // }
      this.todos.forEach(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    deleteObj(id) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id
      })
    },
    //全选或全不选
    checkAllTodo(done) {
      this.todos.forEach(todo => {
        todo.done = done
      })
    },
    //清除已完成任务
    clearAll() {
      this.todos = this.todos.filter(todo => {
        return !todo.done
      })
    },
    //修改
    edit(title, id) {
      this.todos.forEach(todo => {
        if (todo.id === id) {
          todo.title = title;
        }
      })
    }
  },
  mounted() {
    this.$bus.$on('reDoneApp', this.reDoneApp)
    // this.$bus.$on('deleteObj', this.deleteObj)
    //订阅消息
    const psId = pubsub.subscribe('deleteObj', (msgName, data) => {
      this.deleteObj(data)
    })
    //修改
    this.$bus.$on('edit', this.edit)
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  beforeDestroy() {
    this.$bus.$off(['reDoneApp','edit'])
    // this.$bus.$off(['reDoneApp', 'deleteObj'])
    pubsub.unsubscribe(this.psId)
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-editor {
  color: #fff;
  background-color: green;
  border: 1px solid darkgreen;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-editor:hover {
  color: #fff;
  background-color: darkgreen;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
