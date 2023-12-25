<template>
	<view class="content">
		<view class="header">
			<uni-swiper-dot class="uni-swiper-dot-box" field="content">
				<swiper class="swiper-box" :current="swiperDotIndex" circular indicator-dots autoplay>
					<swiper-item v-for="(item, index) in gallery" :key="item.id">
						<image :src="item.img_url" alt="" class="image" />
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="text">
			<view class="t">
				<text class="title">{{info.name}}</text>
				<text class="in">{{info.goods_brief}}</text>
				<text class="money">￥{{info.retail_price}}</text>
			</view>
		</view>
		<view class="s">
			<text class="ss">商品参数</text>
			<text>规格尺寸</text>
			<view class="for" v-for="(item,index) in attribute" :key="index">
				<text class="a">{{item.name}}</text>
				<text class="b">{{item.value}}</text>
			</view>
		</view>
		<view class="car">
			<view class="btn">
				<button @click="addCar()">加入购物车</button>
			</view>
		</view>
		<view class="rich">
			<rich-text class="imagess" :nodes="info.goods_desc" id="richtext"></rich-text>
		</view>
	</view>
</template>

<script>
	import {
		GetShop
	} from '../../Api/shopList.js'
	import {AddCar} from '../../Api/Car.js'
	export default {
		data() {
			return {
				id: '',
				attribute: [],
				comment: [],
				gallery: [],
				info: [],
				issue: [],
				productList: [],
				strings: '',
				from:{
					goodsId: '',
					number: 1,
					productId: ''
				}
			}
		},
		methods: {
			async GetDatas() {
				let res = await GetShop({
					id: this.id
				})
				let {
					attribute,
					comment,
					gallery,
					info,
					issue,
					productList
				} = res.data
				this.attribute = attribute;
				this.comment = comment;
				this.gallery = gallery;
				this.info = info;
				this.issue = issue;
				this.productList = productList;
				this.from.goodsId = productList[0].goods_id
				this.from.productId = productList[0].id
				console.log(this);
			},
			async addCar(){
				let res = await AddCar({
					goodsId :this.from.goodsId,
					productId:this.from.productId,
					number: 1
					
				})
				console.log(res);
			}
		},
		onLoad: function(option) {
			this.id = option.id
		},
		onShow() {
			this.GetDatas()
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		.uni-swiper-dot-box {
			width: 750rpx;
			height: 750rpx;

			.swiper-box {
				width: 750rpx;
				height: 750rpx;

				.image {
					width: 750rpx;
					height: 750rpx;
				}
			}
		}
	}

	.text {
		width: 750rpx;
		height: 306rpx;
		overflow: hidden;
		background: #fff;

		.t {
			display: block;
			width: 718.75rpx;
			height: 100%;
			margin-left: 31.25rpx;
			padding: 38rpx 31.25rpx 38rpx 0;
			border-bottom: 1px solid #f4f4f4;

			.title {
				height: 41rpx;
				margin-bottom: 5.208rpx;
				font-size: 41rpx;
				line-height: 41rpx;
				display: block;
				text-align: center;
			}

			.in {
				height: 43rpx;
				margin-bottom: 41rpx;
				font-size: 24rpx;
				line-height: 36rpx;
				color: #999;
				display: block;
				text-align: center;
			}

			.money {
				height: 35rpx;
				font-size: 35rpx;
				line-height: 35rpx;
				color: #b4282d;
				display: block;
				text-align: center;
			}
		}
	}

	.s {
		width: 687.5rpx;
		height: 104rpx;
		line-height: 104rpx;
		font-size: 38.5rpx
	}

	.a {
		margin-left: 30rpx;
		font-size: 25rpx;
		width: 134rpx;
		height: 45rpx;
		line-height: 45rpx;
		overflow: hidden;
		color: #999;
	}

	.b {
		font-size: 36.5rpx;
		margin-left: 20rpx;
		width: 480rpx;
		height: 45rpx;
		line-height: 45rpx;
		overflow: hidden;
		color: #333;
	}

	.rich {
		position: relative;
		top: 910rpx;

		#richtext [src] {
			width: 66vh;
		}

		.imagess [src] {
			width: 66vh;
		}
	}

	.car {
		width: 100%;
		height: 190rpx;
		background-color: #b4282d;
		position: fixed;
		z-index: 999;
		top: 1349rpx;

		.btn {
			height: 160rpx;
		}
	}
</style>