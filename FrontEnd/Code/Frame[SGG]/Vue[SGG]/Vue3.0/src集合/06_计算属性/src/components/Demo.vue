<template>
    <h1>小鸟游六花</h1>
    姓：<input type="text" v-model="person.fname"><br>
    名：<input type="text" v-model="person.lname"><br>
    全名：{{ person.fullname }}<br>
    修改全名：<input type="text" v-model="person.fullname">
</template>
  
<script>

import { reactive, computed } from 'vue'

export default {
    name: 'Demo',
    setup(props, context) {
        let person = reactive({
            fname: 'Takanashi',
            lname: 'Rikka',
        })
        //计算属性(简写 没有考虑计算属性被修改的情况)
        // person.fullname = computed(() => {
        //     return person.fname + '-' + person.lname
        // })

        //计算属性(完整写法 考虑读和写)
        person.fullname = computed({
            get() {
                return person.fname + '-' + person.lname
            },
            set(value) {
                const nameArr = value.split('-');
                
                person.fname = nameArr[0],
                person.lname = nameArr[1]
            }
        })

        return {
            person
        }
    }
}
</script>
  
  