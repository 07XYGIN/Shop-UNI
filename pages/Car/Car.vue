<template>
	<view class="content">
		<view class="car" v-for="item in carList" :key="item.id">
			<image :src="item.list_pic_url" mode=""></image>
			<text class="name">{{item.goods_name}}</text>
			<text class="money">￥{{item.market_price}}</text>
			<button @click="del(item)" id="btns">删除</button>
		</view>
		<view class="GW">
			<text>合计￥{{cartTotal.goodsAmount}}</text>
		</view>
	</view>
</template>

<script>
	import {
		GetCarList,DelList
	} from '../../Api/Car.js'
	export default {
		data() {
			return {
				carList: [],
				cartTotal: []
			}
		},
		methods: {
			async GetList() {
				let res = await GetCarList()
				let {
					cartList,
					cartTotal
				} = res.data
				this.carList = cartList
				this.cartTotal = cartTotal
				console.log(this);
			},
			async del(e) {
				console.log(e.product_id);
				let res = await DelList({
					productIds:e.product_id + ''
				})
				console.log(res);
				this.GetList()
			}
		},
		onShow() {
			this.GetList()
		}
	}
</script>

<style lang="scss" scoped>
	#btns {
position: relative;
    top: -120rpx;
    left: 120rpx;
    width: 210rpx;
    height: 60rpx;
	line-height: 60rpx;
	}

	.content {
		position: relative;

		.GW {
			width: 100%;
			height: 170rpx;
			position: absolute;
			top: 1108rpx;
			text-align: center;
		}

		.car {
			height: 164rpx;
			width: 672rpx;
			position: relative;
			border-bottom: 1px solid #f4f4f4;

			image {
				height: 125rpx;
				width: 125rpx;
				background: #f4f4f4;
				margin: 19.5rpx 18rpx 19.5rpx 0;
			}

			.name {
				position: absolute;
				display: block;
				top: 40rpx;
				left: 210rpx;
			}

			.money {
				position: relative;
				display: block;
				top: -60rpx;
				left: 200rpx;
			}
		}
	}
</style>