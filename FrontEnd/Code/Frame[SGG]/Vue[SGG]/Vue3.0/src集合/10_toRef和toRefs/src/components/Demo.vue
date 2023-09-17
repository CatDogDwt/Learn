<template>
    <h2>{{ person }}</h2>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">+1</button>
    <hr>
    <h2>当前值为：{{ sum2 }}</h2>
    <button @click="sum2--">-1</button>
    <hr>
    <h2>更改a{b{c:{{ a.b.c }}}}</h2>
    <button @click="a.b.c += 10">+10</button>
</template>
  
<script>

import { reactive, toRefs, toRef } from 'vue'

export default {
    name: 'Demo',
    setup(props, context) {

        let person = reactive({
            sum: 0,
            sum2: 100,
            a: {
                b: {
                    c: 10
                }
            }
        })

        //refs和ref起到一个桥接的作用 他们将一组数据拆分成单独的数据来供外部使用
        // const sum2 = toRef('person', 'sum2')

        const x = toRefs(person)
        console.log(x);

        return {
            person,
            ...toRefs(person)
        }
    }
}
</script>
  
  