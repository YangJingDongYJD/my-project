//添加收货地址
import {http} from "@/utils/http";
import type {AddressParams,AddressItem} from "@/types/address";

//新增收货地址
export const postMemberAddressAPI = (data:AddressParams) => {
	return http({
		method: 'POST',
		url: '/member/address',
		data
	})
}

//获取收货地址列表
export const getMemberAddressAPI = () => {
	return http<AddressItem[]>({
		method: 'GET',
		url:'/member/address'
	})
}


//获取收货地址详情
export const getMemberAddressByIdAPI = (id:string) =>{
	return http<AddressItem>({
	  method:'GET',
	  url:`/member/address/${id}`
	})
}

//修改收货地址
export const  putMemberAddressByIdAPI = (id:string,data:AddressParams) => {
	return http({
		method:'PUT',
		url:`/member/address/${id}`,
		data
	})
}

//删除地址
export const deleteMemberAddressByIdAPI = (id:string) => {
	return http({
		method:'DELETE',
		url:`/member/address/${id}`
	})
}