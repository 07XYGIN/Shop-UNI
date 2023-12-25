<template>
	<view class="content">
		<view class="left">
			<view class="text" v-for="item in categoryList" :key="item.id" @click="getId(item)">
				<view class="t">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="right">
			<image :src="title.wap_banner_url" mode=""></image>
			<text class="textc">{{title.front_name}}</text>
			<view class="i">{{title.name}}分类</view>
			<view class="b">
				<uni-grid :column="3" :showBorder="false" :square="false" class="uni">
					<uni-grid-item v-for="item in title.subCategoryList" :key="item.id">
						<view>
							<view class="p">{{item.name}}</view>
							
							<image :src="item.wap_banner_url" mode="" class="img"></image>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
	</view>
</template>


<script>
	import {
		GetList,
	} from '../../Api/index.js'
	import {
		Current
	} from '../../Api/List.js'
	export default {
		data() {
			return {
				categoryList: [],
				title: [],
			}
		},
		methods: {
			async getdata() {
				let res = await GetList()
				this.categoryList = res.data.categoryList
			},
			async getId(e) {
				let res = await Current({
					id: e.id
				})
				this.title = res.data.currentCategory
			},
			async getList(e) {
				let res = await Current({
					id: '1005000',
				})
				this.title = res.data.currentCategory
			}
		},
		onLoad() {
			this.getdata(),
				this.getList()
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 100vh;
		display: flex;


		.left {
			height: 100%;
			flex: 1;
			display: flex;
			justify-content: space-between;
			flex-direction: column;

			.text {

				.t {
					height: 100%;
					font-size: 36rpx;
					text-align: center;
				}
			}
		}

		.right {
			flex: 3;
			height: 100%;
			position: relative;

			image {
				position: absolute;
				top: 30rpx;
				text-align: center;
				color: #fff;
				font-size: 28rpx;
				left: 0;
				height: 192rpx;
				line-height: 192rpx;
				width: 100%;
				z-index: -999;
			}

			.textc {
				position: absolute;
				top: 40rpx;
				text-align: center;
				color: #fff;
				font-size: 28rpx;
				height: 192rpx;
				line-height: 192rpx;
				width: 100%;
			}

			.b {
				margin-top: 380rpx;
				.img {
					height: 144rpx;
					width: 144rpx;
					position: static;	
				}
				.p{
					text-align: center;	
				}
			}

			.i {
				font-size: 24rpx;
				text-align: center;
				color: #333;
				padding: 0 10rpx;
				width: auto;
				position: absolute;
				left: 210rpx;
				top: 250rpx;
			}
		}
	}

	.uni {
		width: 150rpx;
		height: 150rpx;
	}

</style>