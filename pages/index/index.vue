<template>
	<view class="content">
		<view class="header">
			<uni-swiper-dot class="uni-swiper-dot-box" field="content">
				<swiper class="swiper-box" :current="swiperDotIndex" circular indicator-dots autoplay>
					<swiper-item v-for="(item, index) in banner" :key="item.id">
						<image :src="item.image_url" alt="" />
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="main">
			<view class="block" v-for="item in channel" :key="item.id">
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="aside">
			<view class="title">
				品牌制造商直供
			</view>
			<view class="content">
				<uni-grid :column="2" :showBorder="false" :square="false" class="uni">
					<uni-grid-item v-for="item in brandList" :key="item.id">
						<view class="a" @click="go(item)">
							<image :src="item.new_pic_url"></image>
							<text class="text">{{item.name}}</text>
							<text class="money">{{item.floor_price}}元起</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
			<view class="title">
				周一周四 · 新品首发
			</view>
			<view class="content">

				<uni-grid :column="2" :showBorder="false" :square="false" class="uni">
					<uni-grid-item v-for="item in newGoodsList" :key="item.id">
						<view class="a" @click="get(item)">
							<image :src="item.list_pic_url"></image>
							<text class="text">{{item.name}}</text>
							<text class="money">{{item.retail_price}}元起</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
			<view class="title">人气推荐</view>
			<view class="content">
				<view class="cont" v-for="item in hotGoodsList" :key="item.id" @click="GetList(item)">
					<image :src="item.list_pic_url" mode="" id="image"></image>
					<text class="b">{{item.name}}</text>
					<text class="c">{{item.goods_brief}}</text>
					<text class="d">￥{{item.retail_price}}</text>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="t" v-for="item in categoryList" :key="item.id">
				<text class="tt">{{item.name}}</text>
				<uni-grid :column="2" :showBorder="false" :square="false" class="uni">
					<uni-grid-item v-for="ited in item.goodsList" :key="ited.id">
						<view class="a" @click="shopList(ited)">
							<image :src="ited.list_pic_url"></image>
							<text class="p">{{ited.name}}</text>
							<text class="l">{{ited.retail_price}}元起</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		GetList
	} from '../../Api/index.js'
	export default {
		data() {
			return {
				banner: [],
				list: [],
				channel: [],
				brandList: [],
				newGoodsList: [],
				hotGoodsList: [],
				categoryList: []
			}
		},
		methods: {
			async getdata() {
				let res = await GetList()
				let {
					banner,
					hotGoodsList,
					channel,
					brandList,
					newGoodsList,
					categoryList
				} = res.data
				this.banner = banner
				this.channel = channel
				this.brandList = brandList
				this.newGoodsList = newGoodsList
				this.hotGoodsList = hotGoodsList
				this.categoryList = categoryList
				console.log(res.data.hotGoodsList);
				console.log(this);
			},
			//跳转一
			async go(e) {
				console.log(e.id);
			},
			//跳转二
			async get(e) {
				console.log(e.id);
			},
			//导航三
			async GetList(e) {
				console.log(e.id);
			},
			//跳转四
			async shopList(e) {
				console.log(e.id);
			}
		},
		onLoad() {
			this.getdata()
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		.header {
			width: 100%;

			image {
				height: 450rpx;
			}
		}
	}

	.main {
		height: 181rpx;
		width: 750rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.aside {
		margin-top: 10px;

		.title {
			text-align: center;
			height: 140rpx;
			margin: 30rpx 0;
			line-height: 140rpx;
		}

		.content {
			margin-top: 20rpx;
			width: 750rpx;
			position: relative;
		}

		image {
			width: 375rpx;
			height: 253rpx;
		}
	}

	.text {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		font-size: 33rpx;
		height: 43rpx;
		color: #333;
	}

	.money {
		font-size: 25rpx;
		color: #999;
		position: absolute;
		top: 60rpx;
		left: 10rpx;
	}

	#image {
		width: 300rpx;
		height: 300rpx;
	}

	.cont {
		position: relative;
	}

	.b {
		position: absolute;
		top: 20px;
		left: 100px;
		width: 456rpx;
		display: block;
		color: #333;
		line-height: 50rpx;
		font-size: 30rpx;
	}

	.c {
		width: 456rpx;
		display: block;
		color: #999;
		line-height: 50rpx;
		font-size: 25rpx;
		position: absolute;
		left: 120px;
		top: 40px;
	}

	.d {
		width: 456rpx;
		display: block;
		color: #b4282d;
		line-height: 50rpx;
		font-size: 33rpx;
		position: absolute;
		left: 120px;
		top: 80px;
	}

	.tt {
		display: block;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
	}

	.footer {
		position: relative;

		image {
			width: 345rpx;
			height: 345rpx;
			background: #f8f8f8;
			margin-bottom: 10rpx;
		}

		.p {
			position: absolute;
			top: 300rpx;
			left: 30px;
			overflow: hidden;
			height: 40rpx;
			line-height: 40rpx;
			text-align: center;
			font-size: 30rpx;
			color: #333;
		}

		.l {
			position: absolute;
			top: 330rpx;
			left: -10rpx;
			width: 100%;
			height: 46rpx;
			line-height: 46rpx;
			text-align: center;
			font-size: 30rpx;
			color: #b4282d;
		}
	}
</style>