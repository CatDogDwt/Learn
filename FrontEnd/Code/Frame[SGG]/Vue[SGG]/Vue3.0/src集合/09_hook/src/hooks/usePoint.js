import { reactive, onMounted, onBeforeUnmount } from 'vue'

export default function () {
    let point = reactive({
        x: 0,
        y: 0,
    })

    const c = (e) => {
        point.x = e.pageX
        point.y = e.pageY
    }

    onMounted(() => {
        window.addEventListener('click', c)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', c)
    })

    return point
}