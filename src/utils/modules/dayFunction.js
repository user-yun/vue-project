import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
dayjs.extend(isLeapYear) // 使用插件
console.log('dayFunction', dayjs.locale())
console.log('dayFunction', dayjs())
export default {}
