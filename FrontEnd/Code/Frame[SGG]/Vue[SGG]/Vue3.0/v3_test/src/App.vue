<template>
  <div class="app">
    <h3>App</h3>
    <!-- <Child></Child> -->
    <Suspense>
      <Child></Child>
    </Suspense>
  </div>
</template>

<script>
//静态引入
// import Child from './components/Child.vue'
import { defineAsyncComponent } from "vue";
//异步引入
const Child = defineAsyncComponent(() => {
  import('./components/Child.vue')
})

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

