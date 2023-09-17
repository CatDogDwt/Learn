<template>
  <h1>小鸟游六花</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>喜欢的饮料:{{ person.drinks.type }}</h3>
  <h3>饮料价格:{{ person.drinks.price }}</h3>
  <h4 v-for="item in person.hobby">爱好：{{ item }}</h4>
  <button @click="changeInfo">修改角色信息</button>
</template>

<script>

import { reactive } from 'vue'

export default {
  name: 'App',
  setup() {
    let person = reactive({//对象 数组
      name: 'Rikka',
      age: 16,
      drinks: {
        type: '可口可乐',
        price: '3 RMB'
      },
      hobby: ['钓鱼', '打牌', '赛鸟']
    })

    //方法
    const changeInfo = () => {
      person.name = 'zelda';
      person.age = 108
      person.drinks.type = '雪碧'
      person.drinks.price = '2 RMB'
    }

    return {
      person,
      changeInfo
    }
  }
}
</script>

