<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称 {{ name }}</h2>
    <h2>学校地址 {{ address }}</h2>
    <button @click="showName()">showName</button>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
// export const school = Vue.extend({//分别暴露
//优化👇 省略Vue.extend
export default {
  name: "School",
  data() {
    return {
      name: "信工",
      address: "SJZ",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
// export default school//默认暴露 常用

// export {school}//统一暴露
</script>

<style>
/*组件的样式*/
.demo {
  background-color: brown;
}
</style>
