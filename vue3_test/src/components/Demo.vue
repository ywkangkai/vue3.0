<template>
  <h3>{{car.name}}-{{car.price}}</h3>
</template>

<script>
import {ref,inject} from 'vue'
import userpoint from '../hook/usepoint'
export default {

  setup(){
    //数据
    let car = inject('car')
    return {
      car,
    }
  }
}
</script>

