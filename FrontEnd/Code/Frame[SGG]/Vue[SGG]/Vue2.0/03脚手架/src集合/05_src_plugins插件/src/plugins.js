export default {
    install() {
        //配置全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })
    }
}