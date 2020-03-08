<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!-- header -->
		<goodsHeader/>
	</view>
</template>

<script>
	import goodsHeader from "./goodsHeader.vue"
	export default{
		components:{
			goodsHeader
		},
		data(){
			return {
				goodsInfo:{
					name:"",
					price:"",
					number:1,
					spec:""
				}
			}
		},
		onLoad(option){
			console.log(option)
			this.goodsInfo = JSON.parse(option.goodsInfo);
			
		}
	}
</script>

<style>
</style>
