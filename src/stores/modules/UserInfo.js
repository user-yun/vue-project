import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import useUtils from '@u'
export default defineStore('user-info', () => {
  const utils = useUtils()
  const userInfo = reactive({})
  const getUserInfo = computed(() => userInfo)
  const setUserInfo = (params) => {
    if (utils.isNeObj(params)) {
      Object.entries(params).forEach(([key, value]) => {
        userInfo[key] = value
      })
    }
  }
  const clearUserInfo = () => {
    for (let key in userInfo) {
      delete userInfo[key]
    }
  }
  return { userInfo, getUserInfo, setUserInfo, clearUserInfo }
})
