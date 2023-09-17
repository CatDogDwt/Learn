<template>
  <div>
    <h3>App(祖先)</h3>
  </div>
</template>

<script>
import { ref, reactive, toRefs, readonly, isProxy, isReactive, isReadonly, isRef } from 'vue';

export default {
  name: 'App',
  setup() {
    let role = reactive({
      name: 'Rikka',
      age: 16
    })
    let sum = ref(0);
    let role2 = readonly(role)

    console.log(isRef(sum));
    console.log(isReactive(role));
    console.log(isReadonly(role2));
    console.log(isProxy(role2));

    return {
      ...toRefs(role)
    }
  }
}
</script>

