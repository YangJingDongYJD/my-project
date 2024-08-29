<script setup lang="ts">
	import { onLoad } from "@dcloudio/uni-app";
	//引入接口
	import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home';
	import { ref } from 'vue';
	import type { BannerItem, CategoryItem, HotItem } from "@/types/home";
	//引入子组件
	import CustomNavbar from './components/CustomNavbar.vue';
	import CategoryPanel from './components/CategoryPanel.vue';
	import HotPanel from "./components/HotPanel.vue";
	import PageSkeleton from "./components/PageSkeleton.vue";
    import { useGuessList } from "@/composables";


    //定义骨架屏响应式标志
	const isLoading = ref(false);

	/**
	 *此时页面还未显示，没有开始进入的转场动画，页面dom还不存在
	 * onLoad比较适合的操作是：接受上页的参数，联网取数据，更新data
	*/
	onLoad(async() => {
		isLoading.value = true;
		await Promise.all([
			getHomeBannerData(),//请求首页轮播图数据
			getHomeCategoryData(),//请求首页分类模块数据
			getHomeHotData(),//请求首页热门推荐数据
		])
		isLoading.value = false;
	})


	//获取首页轮播图数据
	const bannerList = ref<BannerItem[]>([]);
	const getHomeBannerData = async () => {
		const res = await getHomeBannerAPI();
		bannerList.value = res.result;
	};

	//获取前台模块数据
	const categoryList = ref<CategoryItem[]>([])
	const getHomeCategoryData = async () => {
		const res = await getHomeCategoryAPI();
		categoryList.value = res.result;
	}

	//获取热门推荐数据
	const HotMutliList = ref<HotItem[]>([]);
	const getHomeHotData = async () => {
		const res = await getHomeHotAPI();
		HotMutliList.value = res.result;
	}

	//调用猜你喜欢的的组合式函数
	const {guessRef,onScrolltolower} = useGuessList();
	
	//定义下拉结束标志
	const isTriggered = ref(false);

	//自定义下拉刷新事件
	const onRefresherrefresh = async() => {
		//设置下拉开始动画状态
		isTriggered.value = true;
		// await getHomeBannerData();//请求首页轮播图数据
		// await getHomeCategoryData();//请求首页分类模块数据
		// await getHomeHotData();//请求首页热门推荐数据
		//重置猜你喜欢的数据
		guessRef.value?.resetData();
		await Promise.all([
			getHomeBannerData(),
			getHomeCategoryData(),
			getHomeHotData(),
			guessRef.value?.getMore()
			]);
		//关闭下拉结束动画状态
		isTriggered.value = false;
	}
</script>

<template>
	<!-- 自定义导航栏 -->
	<CustomNavbar />
	<scroll-view 
	  refresher-enabled 
	  @refresherrefresh="onRefresherrefresh" 
	  :refresher-triggered="isTriggered" 
	  @scrolltolower="onScrolltolower"
	  class="scroll-view" 
	  scroll-y
	  >
	  <PageSkeleton v-if="isLoading"/>
	  <template v-else>
	  	<!-- 自定义轮播图 -->
	  	<GlobalSwiper :list="bannerList" />
	  	<!-- 分类面板 -->
	  	<CategoryPanel :list="categoryList" />
	  	<!-- 热门推荐 -->
	  	<HotPanel :list="HotMutliList" />
	  	<!-- 猜你喜欢 -->
	  	<GlobalGuess ref="guessRef" />
	  </template>
	</scroll-view>
</template>

<style lang="scss">
	page {
		background-color: #f7f7f7;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.scroll-view {
		flex: 1;
	}
</style>