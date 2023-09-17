<template>
  <h1>小鸟游六花</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="changeInfo">修改角色信息</button>
</template>

<script>

import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    //响应式数据
    let name = ref('Rikka')//基本数据类型
    let age = ref(16)

    //方法
    const changeInfo = () => {
      name.value = 'zelda';
      age.value = 108
    }

    return {
      name,
      age,
      changeInfo
    }
  }
}
</script>

