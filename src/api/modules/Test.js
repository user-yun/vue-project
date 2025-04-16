import { http } from '@a/http'
export const testGet = (params) => {
  return http({
    // 请求url
    url: '/test/get',
    // 请求方式
    method: 'get',
    // 请求拼接参数
    params,
  })
}
export const testPost = (data) => {
  return http({
    // 请求url
    url: '/test/post',
    // 请求方式
    method: 'post',
    // 请求拼接参数
    data,
  })
}
export const testForm = (data) => {
  return http({
    // 请求url
    url: '/test/form',
    // 请求方式
    method: 'form',
    // 请求拼接参数
    data,
  })
}
export default {
  testGet,
  testPost,
  testForm,
}
