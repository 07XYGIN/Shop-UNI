<template>
	<view class="content">
		<image :src="data.app_list_pic_url"></image>
		<text id="t">{{data.name}}</text>
		<view class="text">
			{{data.simple_desc}}
		</view>
	</view>

</template>

<script>
	import {
		GetData
	} from '../../Api/getList.js'
	export default {
		data() {
			return {
				id: '',
				data: {}
			}
		},
		methods: {
			async getlist() {
				let res = await GetData({
					id: this.id
				})
				this.data = res.data.brand
				console.log(this);
			}
		},
		onLoad: function(option) {
			this.id = option.id
		},
		onShow() {
			this.getlist()
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 400rpx;
			z-index: -999;
		}

		#t {
			display: block;
			height: 37.5rpx;
			font-size: 37.5rpx;
			color: #fff;
			position: relative;
			top: 171rpx;
			left: 310rpx;
		}

		.text {
    margin-top: 370rpx;
    background: #fff;
    width: 100%;
    height: auto;
    overflow: hidden;
    padding: 41.5rpx 31.25rpx;
    font-size: 30rpx;
    color: #666;
    line-height: 41.5rpx;
    text-align: center;
		}
	}
</style>