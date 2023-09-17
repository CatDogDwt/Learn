<template>
    <h1>小鸟游六花</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="test">触发demo组件的click事件</button>
    <slot name="tttt"></slot>
</template>
  
<script>

import { reactive } from 'vue'

export default {
    name: 'Demo',
    props: ['msg', 'showHM'],
    emits: ['hello'],
    beforeCreate() {
        console.log('@@@@@beforeCreate', this);
    },
    setup(props, context) {
        console.log('@@@@@@setup', 'this=>', this, 'props=>', props, 'context=>', context); //比beforeCreate执行早👆
        let person = reactive({
            name: 'Rikka',
            age: 16,
        })
        console.log(context.attrs);
        console.log(context.emit);
        console.log(context.expose);
        console.log(context.slots);
        const test = () => {
            context.emit('hello',)
        }

        return {
            person,
            test
        }
    }
}
</script>
  
  