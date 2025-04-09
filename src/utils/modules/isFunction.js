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
  if (getDataType(arr) === 'Array') return arr.length > 0
  return false
}
export default { isNe, isNeObj, isNeArr }
