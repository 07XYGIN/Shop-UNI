<template>
	<view class="content">
		<view class="box" v-for="item in banner" :key="item.id"></view>
	</view>
</template>

<script>
	import {GetList} from '../../Api/index.js'
	export default {
		data() {
			return {
				banner:[],
				list:[]
			}
		},
		methods: {
			async getdata(){
				let res = await GetList()
				let {banner} = res.data
				this.banner = banner
				console.log(this.banner);
			}
		},
		onLoad() {
			this.getdata()
		},
	}
</script>

<style lang="scss" scoped>

</style>