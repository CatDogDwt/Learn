<template>
  <!-- 组件的结构 -->
  <div>
    <h1>学生姓名:{{ name }}</h1>
    <h1>学生性别:{{ gender }}</h1>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法等）
export default {
  name: "Student",
  data(){
    return{
        name:'went',
        gender:'male'
    }
  }
};
</script>

<style>
/*组件的样式*/
</style>