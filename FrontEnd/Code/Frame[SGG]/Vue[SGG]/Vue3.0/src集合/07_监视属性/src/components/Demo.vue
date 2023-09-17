<template>
    <h2>当前求和为：{{ person.sum }}</h2>
    <button @click="person.sum++">+1</button>
    <hr>
    <h2>当前值为：{{ person.sum2 }}</h2>
    <button @click="person.sum2--">-1</button>
    <hr>
    <h2>更改a{b{c:{{ person.a.b.c }}}}</h2>
    <button @click="person.a.b.c += 10">+10</button>
</template>
  
<script>

import { ref, watch, reactive, watchEffect } from 'vue'

export default {
    name: 'Demo',
    setup(props, context) {
        // let sum = ref(0)
        // let sum2 = ref(100)
        //监视ref所定义的单个响应式数据
        // watch(sum, (newValue, oldValue) => {
        //     console.log('sum变了', newValue, oldValue);
        // }, { immediate: true })//在这里配置属性

        //监视ref所定义的多个响应式数据
        // watch([sum, sum2], (newValue, oldValue) => {
        //     console.log('sum或sun2变了', newValue, oldValue);
        // })

        let person = reactive({
            sum: 0,
            sum2: 100,
            a: {
                b: {
                    c: 10
                }
            }
        })
        // //监视reactive所定义的响应式数据,此处无法正确的获得oldValue,而且强制开启深度监视即deep配置失效
        // watch(person, (newValue, oldValue) => {
        //     console.log(newValue, oldValue);
        // })
        // //监视reactive所定义的响应式数据中的某一个属性
        // watch(() => person.sum, (newValue, oldValue) => {
        //     console.log(newValue, oldValue);
        // })
        //监视reactive所定义的响应式数据中的某些属性
        // watch([() => person.sum, () => person.sum2], (newValue, oldValue) => {
        //     console.log(newValue, oldValue);
        // })
        //特殊情况 此时deep奏效
        // watch(() => person.a, (newValue, oldValue) => {
        //     console.log(newValue, oldValue);
        // }, { deep: true })//此时由于监视的是reactive所定义的对象中的某个属性（即reactive对象中的对象） 所以deep有效

        //watchEffect
        watchEffect(() => {
            const x1 = person.sum
            const x2 = person.a.b.c
            console.log('watchEffect所指定的回调执行了');
        })

        return {
            // sum, sum2
            person
        }
    }
}
</script>
  
  