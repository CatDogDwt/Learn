<template>
  <div class="app">
    <h3>App</h3>
    <Child></Child>
  </div>
</template>

<script>

import Child from './components/Child.vue'

export default {
  name: 'App',
  components: {
    Child
  },
}
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>

