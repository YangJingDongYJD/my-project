import { http } from "@/utils/http";
import type {PageParams} from "@/types/global";
import type {HotResult} from "@/types/hot";

/**
 *通用的热门推荐数据API
 * @param url 请求地址
 * @param data 请求参数
*/
type HotParams = PageParams & {subType?:string}
export const getHomeRecommendAPI = (url:string, data?:HotParams) => {
	return http<HotResult>({
		method:'GET',
		url,
		data
	})
}