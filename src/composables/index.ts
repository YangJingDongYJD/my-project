import { ref } from "vue";
import type { GlobalGuessInstance } from "@/types/component";

/**
 * 猜你喜欢的组合式函数
*/
export const useGuessList = () => {
	//获取猜你喜欢组件实例
	const guessRef = ref<GlobalGuessInstance>();
	const onScrolltolower = () => {
		guessRef.value?.getMore();
	}
	
	//return返回供外部使用
	return{
		guessRef,
		onScrolltolower
	}
}
