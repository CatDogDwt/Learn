<template>
  <Demo msg="Takanashi" msg2="114514" @hello="showHM">
    <!-- <span>Takanashi</span> -->
    <template v-slot:tttt><!-- 与vu2中不同 vue2中为v-slot="tttt" -->
      <span>Takanashi</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'

export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    const showHM = () => {
      alert('hello!')
    };

    return {
      showHM
    }
  },
}
</script>

