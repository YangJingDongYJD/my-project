/**
 * 会员接口分装
*/
import type { ProfileDetail, ProfileParams } from "@/types/member"
import {http} from "@/utils/http"

//获取会员个人信息API
export const getMemberProfileAPI = () => {
	return http<ProfileDetail>({
		method:'GET',
		url:'/member/profile'
	})
}

//修改个人信息
export const putMemberProfileAPI = (data:ProfileParams) => {
	return http<ProfileDetail>({
		method:'PUT',
		url:'/member/profile',
		data,
	})
}