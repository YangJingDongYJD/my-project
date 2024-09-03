/* 
拦截uploadFile文件上传
TODO
1.非http开头拼接地址
2.请求超时
3.添加小程序请求	头标识
4.添加token请求头标识
*/

import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//添加拦截器
const httpInterceptor = {
  //拦截前触发
  invoke(options: UniApp.RequestOptions) {
    //非http开头需要拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    //	请求头超时时间设置
    options.timeout = 5000;
    //添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    //添加token请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/**
 * 请求函数
 * @params uniApp.RequestOptions
 * @returns Promise
 * 1.返回Promise对象
 * 2.请求成功
 *   提取核心数据 res.data
 *   添加类型，支持泛型
 * 3.请求失败
 *   网络错误->提示用户换网络
 *   401错误->清理用户信息，跳转到登录页面
 *   其他错误->根据后端错误信息轻提示
 */
interface Data<T> {
  code: string
  msg: string
  result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options, //请求参数包括请求地址、方法等
      //请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode <= 300) {
          //提取核心数据
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          //401清理用户数据，跳转登录页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({
            url: '/pages/login/login',
          })
          reject(res)
        } else {
          //其他错误 -> 根据用户端错误信息提示
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      //相应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，请更换网络',
        })
        reject(err)
      },
    })
  })
}
