<template>
  <!-- 组件的结构 -->
  <div class="container">
    <GSearch></GSearch>
    <GList></GList>
  </div>
</template>
  
<script>
import GSearch from './components/GSearch.vue';
import GList from './components/GList.vue';
//组件交互相关的代码（数据、方法等）
export default {
  name: 'App',
  components: {
    GSearch,
    GList
  }
};
</script>
  
<style></style>