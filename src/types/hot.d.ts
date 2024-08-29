import type {GoodsItem,PageResult} from "./global";

//热门推荐 -子类标题
export type SubTypeItem = {
  id:string //子类id
  title:string //子类标题
  goodsItems: PageResult<GoodsItem> //子类标题对应的商品集合
}

/** 热门推荐 */
export type HotResult = {
  id: string //id信息
  bannerPicture: string //活动图片
  title: string //活动标题
  subTypes: SubTypeItem[] //子类选项
}