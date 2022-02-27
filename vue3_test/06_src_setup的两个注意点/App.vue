<template>
  <Demo @hello="showMsg" msg="你好" school="学习">
    <template v-slot:qwe>
      <span >娃哈哈哈哈哈哈</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "@/components/Demo";
export default {
  name: 'App',
  components: {Demo},
  setup(){
    function showMsg(value1,value2){
      alert(`接收到参数${value1},${value2}`)
    }
    return{
      showMsg
    }
  }
}
</script>

