<template>
  <div class="app">
    <h3>App(祖先) {{ name }} {{ age }}</h3>
    <Child></Child>
  </div>
</template>

<script>
import { ref, customRef, reactive, toRefs, provide } from 'vue';
import Child from './components/Child'

export default {
  name: 'App',
  components: {
    Child
  },
  setup() {
    let role = reactive({
      name: 'Rikka',
      age: 16
    })
    provide('role', role)
    return {
      ...toRefs(role)
    }
  }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>

