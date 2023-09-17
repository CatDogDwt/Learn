<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">+1</button>
    <hr>
    <h2>当前点击时鼠标坐标：x:{{ point.x }},y:{{ point.y }}</h2>
</template>
  
<script>
import { ref } from 'vue'
import usePoint from '../hooks/usePoint'

export default {
    name: 'Demo',
    setup(props, context) {
        let sum = ref(0)

        let point = usePoint()

        return {
            sum,
            point
        }
    },
}
</script>
  
  