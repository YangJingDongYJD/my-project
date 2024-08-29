import type {GoodsItem} from "./global"

/** 一级分类项 */
export type CategoryTopItem = {
  children: CategoryChildItem[] //二级分类集合[ 二级分类项 ] 
  id: string //一级分类id
  imageBanners: string[] //一级分类图片集[ 一级分类图片项 ]
  name: string //一级分类名称
  picture: string //一级分类图片
}

/** 二级分类项 */
export type CategoryChildItem = {
  goods: GoodsItem[] //商品集合[ 商品项 ] 
  id: string //二级分类id
  name: string //二级分类名称
  picture: string //二级分类图片
}