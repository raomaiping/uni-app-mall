<template>
	<!-- 自定义顶部导航栏 -->
	<pageHeader />
</template>

<script>
	import pageHeader from "./pageHeader.vue"
	import interfaces from "../../../utils/interfaces.js"
	export default {
		data(){
			return {
				swiperList:[],//轮播图片
				categoryList:[], //分类
				promotion:[] //活动
			}
		},
		components: {
			pageHeader
		},
		onLoad(){
			this.initData();
		},
		methods: {
			initData() {
				uni.request({
					url: interfaces.getMallData, 
					success: (res) => {
						console.log(res);
					}
				});
			}
		}
	}
</script>

<style>
</style>
