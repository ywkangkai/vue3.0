import {reactive,onMounted,onBeforeUnmount} from 'vue'

export default function (){
    let point = reactive({
        x:0,
        y:0
    })

    function savepotin(event){
        point.x = event.pageX
        point.y = event.pageY
    }

    onMounted(()=>{
        window.addEventListener('click',savepotin)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener('click',savepotin)
    })

    return point
}