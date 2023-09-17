<template>
  <h1>小鸟游六花</h1>
  <h2>姓：{{ fname }}</h2>
  <h2>名：{{ lname }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="SayHello">别点我</button>
</template>

<script>

import { h } from 'vue'

export default {
  name: 'App',
  //此处仅为测试 不考虑响应式
  setup() {
    //数据
    let fname = 'Takanashi'
    let lname = 'Rikka'
    let age = 16

    //方法
    const SayHello = () => {
      alert(`我是${fname}${lname},我${age}了,你好`)
    }

    //返回对象 常用
    return {
      fname,
      lname,
      age,
      SayHello
    }
    //返回渲染函数 仅了解
    // return () => {
    //   return h('h1', 'Zelda')
    // }
  }
}
</script>

