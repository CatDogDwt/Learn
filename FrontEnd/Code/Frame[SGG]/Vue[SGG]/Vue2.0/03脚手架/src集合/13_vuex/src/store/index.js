//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//求和相关的配置
const countOptions = {
    //开启命名空间
    namespaced: true,
    //准备actions 用于响应组件中的动作
    actions: {
        incrementOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('+', value);
            }
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit('+', value);
            }, 1000);
        }
    },
    //准备mutations 用于加工数据
    mutations: {
        '+'(state, value) {
            state.sum += value;
        },
        '-'(state, value) {
            state.sum -= value;
        },
    },
    //准备 state 用于存储数据
    state: {
        sum: 0,//当前的和
        rolename1: 'Takanashi',
        rolename2: 'Rikka',
    },
    //准备getters 用于将state中的数据进行加工
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}

//人员相关的配置
const personOptions = {
    //开启命名空间
    namespaced: true,
    mutations: {
        add(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: []
    }
}

//创建并暴露store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})