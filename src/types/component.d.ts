/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import GlobalSwiper from "@/components/GlobalGuess.vue";
import GlobalGuess from "@/components/GlobalSwiper.vue";

//自定义组件的类型申明
declare module 'vue' {
  export interface GlobalComponents {
    GlobalSwiper: typeof GlobalSwiper,
	GlobalGuess: typeof GlobalGuess
  }
}

//组件实例类型
export type GlobalGuessInstance = InstanceType<typeof GlobalGuess>