<template>
  <h3>{{car.name}}-{{car.price}}</h3>
  <Demo></Demo>
</template>

<script>
import Demo from "@/components/Demo";
import {provide} from 'vue'
export default {
  name: 'App',
  components: {Demo},
  setup(){
    let car = {name: 'xxx',price: 'yyy'}
    provide('car',car)
    return {
      car
    }
  }

}
</script>

