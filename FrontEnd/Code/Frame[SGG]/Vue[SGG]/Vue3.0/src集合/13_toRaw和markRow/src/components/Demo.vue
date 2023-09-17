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
    <br>
    <h2>{{person}}</h2>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="updateMark">将sum中的a标记为普通数据</button>
</template>
  
<script>

import { reactive, ref, toRefs, toRaw, markRaw } from 'vue'

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

        const showRawPerson = () => {
            const original = toRaw(person)//只能处理reactive生成的响应式对象
            original.sum++
            console.log(original);
        }

        

        return {
            person,
            name,
            ...toRefs(person),
            showRawPerson,
            updateMark
        }
    }
}
</script>
  
  