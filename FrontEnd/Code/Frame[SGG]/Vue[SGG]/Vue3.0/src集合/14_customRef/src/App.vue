<template>
  <input type="text" v-model="keyword">
  <h3>{{ keyword }}</h3>
</template>

<script>
import { ref, customRef } from 'vue';

export default {
  name: 'App',
  setup() {
    // let keyword = ref('hello') //使用vue提供的内置的ref
    // 自定义一个ref
    const myRef = (value, delay) => {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            console.log('读取');
            track();//通知Vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
            return value
          },
          set(newValue) {
            console.log('修改', newValue);
            clearInterval(timer)//防抖
            timer = setTimeout(() => {
              value = newValue
              trigger();//通知vue去重新解析模板
            }, delay)
          },
        }
      })
    }
    let keyword = myRef('hello', 500) //使用程序员自定义的ref
    return {
      keyword
    }
  }
}
</script>

