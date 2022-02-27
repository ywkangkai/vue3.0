<template>
	<h2>当前求和为：{{sum}}</h2>
	<button @click="sum++">点我+1</button>
</template>

<script>
	import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
	export default {
		name: 'Demo',
		
		setup(){
			console.log('---setup---')
			//数据
			let sum = ref(0)

			//通过组合式API的形式去使用生命周期钩子
			onBeforeMount(()=>{
				console.log('---挂载前---')
			})
			onMounted(()=>{
				console.log('---挂载前后---')
			})
			onBeforeUpdate(()=>{
				console.log('---更新前---')
			})
			onUpdated(()=>{
				console.log('---更新后---')
			})
			onBeforeUnmount(()=>{
				console.log('---删除前---')
			})
			onUnmounted(()=>{
				console.log('---删除后---')
			})

			//返回一个对象（常用）
			return {sum}
		},
		//通过配置项的形式使用生命周期钩子
		//#region 
		beforeCreate() {
			console.log('---beforeCreate---')
		},
		created() {
			console.log('---created---')
		},
		beforeMount() {
			console.log('---beforeMount---')
		},
		mounted() {
			console.log('---mounted---')
		},
		beforeUpdate(){
			console.log('---beforeUpdate---')
		},
		updated() {
			console.log('---updated---')
		},
		beforeUnmount() {
			console.log('---beforeUnmount---')
		},
		unmounted() {
			console.log('---unmounted---')
		},
		//#endregion
	}
</script>

