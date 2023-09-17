<template>
    <h2>x:{{ x.y }}</h2>
    <h2>x2:{{ x2.y2 }}</h2>
    <hr>
    <h2>{{ person }}</h2>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">+1</button>
    <br>
    <h2>当前值为：{{ sum2 }}</h2>
    <button @click="sum2--">-1</button>
    <br>
    <h2>更改a{b{c:{{ a.b.c }}}}</h2>
    <button @click="a.b.c += 10">+10</button>
    <hr>
    <h2>{{ person2 }}</h2>
    <h2>当前求和为：{{ p2sum }}</h2>
    <button @click="p2sum++">+1</button>
    <br>
    <h2>当前值为：{{ p2sum2 }}</h2>
    <button @click="p2sum2--">-1</button>
    <br>
    <h2>更改p2a{p2b{p2c:{{ p2a.p2b.p2c }}}}</h2>
    <button @click="p2a.p2b.p2c += 10">+10</button>
</template>
  
<script>

import { reactive, ref, toRefs, toRef, shallowReactive, shallowRef } from 'vue'

export default {
    name: 'Demo',
    setup(props, context) {
        //传入基本数据类型没有区别
        // let x = ref(0)
        // let x2 = shallowRef(0)
        //shallowRef不会处理对象类型的响应式 而ref会调用reactive实现对象的响应式
        let x = ref({
            y: 0
        })
        let x2 = shallowRef({
            y2: 0
        })

        let person = reactive({//深度监视
            sum: 0,
            sum2: 100,
            a: {
                b: {
                    c: 10
                }
            }
        })

        let person2 = shallowReactive({//只能监测到p2a
            p2sum: 0,
            p2sum2: 100,
            p2a: {
                p2b: {
                    p2c: 10
                }
            }
        })

        return {
            x,
            x2,
            person,
            person2,
            ...toRefs(person),
            ...toRefs(person2)
        }
    }
}
</script>
  
  