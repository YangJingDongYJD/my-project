/**
 * 首页-广告区域数据API
*/
import type {GoodsItem} from "./global";

export type BannerItem = {
	hrefUrl:strig //跳转链接
	id:string //id,
	imgUrl:string //图片链接
	type:number //跳转类型
}

//首页-前台模块数据类型
export type CategoryItem = {
	icon:string //图标路径
	id:string //id
	name:string //name
}

//首页-热门推荐数据类型
export type HotItem = {
    alt: string //推荐说明
    id: string //id
    pictures: string[] //图片集合
    target: string //跳转地址
    title: string //推荐标题
    type: string //推荐类型
}

//猜你喜欢-商品类型 
export type GuessItem = GoodsItem