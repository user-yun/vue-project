import { getDataType } from './getFunction'
// 判断普通数据是否为无效值，但是0是有效值
export const isNe = (value) => {
  return value !== undefined && value !== null && value !== ''
}
// 判断对象数据是否为有效对象，有key存在的，不是{}
export const isNeObj = (obj) => {
  if (getDataType(obj) === 'Object') return Object.keys(obj).length > 0
  return false
}
// 判断数组数据是否为有效数组，有数组长度的，不是[]
export const isNeArr = (arr) => {
  // if (getDataType(arr) === 'Array') return arr.length > 0
  if (Array.isArray(arr)) return arr.length > 0
  return false
}
// 判断是否是对象
export const isObj = (obj) => {
  return getDataType(obj) === 'Object'
}
// 判断是否是数组
export const isArr = (arr) => {
  // return getDataType(arr) === 'Array'
  return Array.isArray(arr)
}
export default { isNe, isNeObj, isNeArr, isObj, isArr }
