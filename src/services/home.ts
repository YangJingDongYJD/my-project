import type { PageParams, PageResult } from "@/types/global"
import type {BannerItem,CategoryItem,GuessItem,HotItem,} from "@/types/home"
import { http } from "@/utils/http"

//首页轮播图请求
export const getHomeBannerAPI = (distributionSite = 1) => {
	return http<BannerItem[]>({
		method: 'GET',
		url: '/home/banner',
		data: {
			distributionSite,
		}
	})
}

//首页前台模块API
export const getHomeCategoryAPI = () => {
	return http<CategoryItem[]>({
		method:'GET',
		url:'/home/category/mutli',
	})
}


//首页热门推荐API
export const getHomeHotAPI = () => {
	return http<HotItem[]>({
		method:'GET',
		url:'/home/hot/mutli'
	})
}

//猜你喜欢API
export const getHomeGoodsGuessLikeAPI = (data?:PageParams) => {
	return http<PageResult<GuessItem>>({
		method:'GET',
		url: '/home/goods/guessLike',
		data
	})
}
