<template>
	<view>
		<view class="block"></view>
		<view class="QR">
			<image src="../../../static/img/qrcode.jpg" mode=""></image>
		</view>
		<view class="title">
			扫描二维码，加我为好友
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	page {
		background-color: #f06c7a;
	}

	.block {
		width: 100%;
		height: 30vh;
		background-color: #fff;
		display: flex;
		justify-content: center;
	}

	.QR {
		width: 60vw;
		height: 80vw;
		margin: -40vw auto 0 auto;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;

		image {
			width: 50vw;
			height: 50vw;
		}
	}

	.title {
		width: 100%;
		margin-top: 50upx;
		display: flex;
		justify-content: center;
		font-size: 36upx;
		color: #fff;
	}

	.btn {
		width: 50%;
		height: 80upx;
		border-radius: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 20upx;
		margin: 0 auto;
		margin-top: 50upx;
		background-color: rgba(255, 255, 255, .8);
	}
</style>
