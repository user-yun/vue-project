import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import useUtils from '@u'
const utils = useUtils()
export default defineStore('user-info', () => {
  const userInfo = reactive({})
  const getUserInfo = computed(() => userInfo)
  const setUserInfo = (params) => {
    if (utils.isNeObj(params)) {
      Object.entries(params).forEach(([key, value]) => {
        userInfo[key] = value
      })
    }
  }

  return { userInfo, getUserInfo, setUserInfo }
})
