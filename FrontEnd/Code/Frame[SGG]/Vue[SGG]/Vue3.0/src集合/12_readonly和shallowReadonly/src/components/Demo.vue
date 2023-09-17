<template>
    <h2>当前值为：{{ name }}</h2>
    <button @click="name += '~'">+ ~</button>
    <br>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">+1</button>
    <br>
    <h2>当前值为：{{ sum2 }}</h2>
    <button @click="sum2--">-</button>
    <br>
    <h2>更改a{b{c:{{ a.b.c }}}}</h2>
    <button @click="a.b.c += 10">+10</button>
</template>
  
<script>

import { reactive, ref, toRefs, readonly, shallowReadonly } from 'vue'

export default {
    name: 'Demo',
    setup(props, context) {

        let name = ref('Rikka')

        let person = reactive({
            sum: 0,
            sum2: 100,
            a: {
                b: {
                    c: 10
                }
            }
        })

        person = readonly(person)
        person = shallowReadonly(person)

        name = readonly(name)//shallowReadonly对ref没必要

        return {
            name,
            ...toRefs(person),
        }
    }
}
</script>
  
  