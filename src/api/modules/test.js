import { http } from '@a/http'
export default {
  testGet(params) {
    return http({
      // 请求url
      url: '/test/get',
      // 请求方式
      method: 'get',
      // 请求拼接参数
      params,
    })
  },
  testPost(data) {
    return http({
      // 请求url
      url: '/test/post',
      // 请求方式
      method: 'post',
      // 请求拼接参数
      data,
    })
  },
  testForm(data) {
    return http({
      // 请求url
      url: '/test/form',
      // 请求方式
      method: 'form',
      // 请求拼接参数
      data,
    })
  },
}
