import { http } from "@/utils/http";
import type { OrderPreResult,OrderCreateParams,OrderResult } from "@/types/order";

//获取预付订单  
export const getMemberOrderPreAPI = () => {
	return http<OrderPreResult>({
		method: 'GET',
		url: '/member/order/pre'
	})
}

//填写订单-获取立即购买
export const getMemberOrderPreNowAPI = (data : {
	skuId : string,
	count : string,
	addressId ?: string
}) => {
	return http({
		method: 'GET',
		url: '/member/order/pre/now',
		data
	})
}

//提交订单
export const postMemberOrderAPI = (data:OrderCreateParams) => {
	return http<{id:string}>({
		method: 'POST',
		url: '/member/order',
		data,
	})
}

//获取订单详情
export const getMemberOrderAPI = (id:string) => {
	return http<OrderResult>({
		method:'GET',
		url:`/member/order/${id}`,
	})
}