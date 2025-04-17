// 获取数据的类型
export const getDataType = (data) => {
  // console.log(Object.prototype.toString.call(undefined)) // '[object Undefined]'
  // console.log(Object.prototype.toString.call(null)) // '[object Null]'
  // console.log(Object.prototype.toString.call(true)) // '[object Boolean]'
  // console.log(Object.prototype.toString.call(123)) // '[object Number]'
  // console.log(Object.prototype.toString.call('hello')) // '[object String]'
  // console.log(Object.prototype.toString.call(function () {})) // '[object Function]'
  // console.log(Object.prototype.toString.call({})) // '[object Object]'
  // console.log(Object.prototype.toString.call([])) // '[object Array]'
  // 测试不同类型的数据
  // const testData = [undefined, null, true, 123, 'hello', function () {}, {}, [], new Date(), /abc/]
  // testData.forEach((data) => {
  //   const type = getDataType(data)
  //   console.log(`数据类型: ${type}`)
  // })
  const result = Object.prototype.toString.call(data)
  const regex = /\[object (\w+)\]/
  const match = regex.exec(result)
  if (match) {
    return match[1]
  }
  return null
}

// 根据输入区间内的值获取随机数，包含区间两端，也就是包含最大值最小值
export const getRandomInRange = (min, max) => {
  // 确保最小值小于等于最大值
  if (min > max) [min, max] = [max, min]
  // 生成一个[0, 1)之间的随机数，然后乘以区间长度，并加上最小值
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//  根据输入区间内的值获取浮点随机数，包含区间两端，也就是包含最大值最小值，len代表小数点后面几位
export const getFloatRandomInRange = (min, max, len = 2) => {
  // 确保min和max为数字，并处理可能的顺序颠倒
  // [min, max] = [Math.min(min, max), Math.max(min, max)];
  if (min > max) [min, max] = [max, min]
  // 添加极小的epsilon以确保包含max
  const epsilon = Number.EPSILON || Math.pow(2, -52)
  const range = max - min + epsilon
  return String(Math.min(Math.random() * range + min, max)).substring(0, len + 2)
}

// 根据输入的位数值获取随机数,1则得到1个随机数，2得到2个随机数01,13,51这样，3得到3个随机数,013,134,512这样
export const getRandomByNum = (num) => {
  let res = ''
  for (let i = 0; i < num; i++) res += Math.floor(Math.random() * 10)
  return res
}
export default { getDataType, getRandomInRange, getFloatRandomInRange, getRandomByNum }
