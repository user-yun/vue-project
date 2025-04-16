import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import useUtils from '@u'
const utils = useUtils()
export default defineStore('project-info', () => {
  const projectInfo = reactive({})
  const getProjectInfo = computed(() => projectInfo)
  const setProjectInfo = (params) => {
    if (utils.isNeObj(params)) {
      Object.entries(params).forEach(([key, value]) => {
        projectInfo[key] = value
      })
    }
  }
  const clearProjectInfo = () => {
    for (let key in projectInfo) {
      delete projectInfo[key]
    }
  }
  return { projectInfo, getProjectInfo, setProjectInfo, clearProjectInfo }
})
