<template>
  <button @click="isShow = !isShow">隐藏demo</button>
  <Demo v-if="isShow"></Demo>
  <Demo2></Demo2>
</template>

<script>
import { ref } from 'vue';
import Demo from './components/Demo'
import Demo2 from './components/Demo2'

export default {
  name: 'App',
  components: {
    Demo,
    Demo2
  },
  setup() {
    let isShow = ref(true)

    return {
      isShow
    }
  }
}
</script>

