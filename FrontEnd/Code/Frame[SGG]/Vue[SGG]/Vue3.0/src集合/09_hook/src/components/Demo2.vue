<template>
    <h2>当前点击时鼠标坐标：x:{{ point.x }},y:{{ point.y }}</h2>
</template>
  
<script>
import usePoint from '../hooks/usePoint'

export default {
    name: 'Demo2',
    setup(props, context) {

        let point = usePoint()

        return {
            point
        }
    },
}
</script>
  
  