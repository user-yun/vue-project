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
export default { getDataType }
