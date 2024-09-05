import { http } from "@/utils/http";

//微信支付
export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data,
  })
}

//模拟支付
export const getPayMockAPI = (data:{orderId:string}) => {
  return({
	method:'GET',
	url:'/pay/mock',
	data
  })
}