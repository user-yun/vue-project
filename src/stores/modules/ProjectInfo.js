import { reactive, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import useUtils from '@u'
import { setI18n } from '@i'
export default defineStore('project-info', () => {
  const utils = useUtils()
  const projectInfo = reactive({
    // 默认非黑夜模式
    isDark: false,
    // 是否需要加载路由，一般在退出登录后需要重新设置为true
    loadRoute: true,
    // 默认语言
    lang: 'zh',
    menuItems: [],
  })
  // 监听如果刷新后解决深色模式切换问题
  watch(
    () => projectInfo.isDark,
    (isDark) => {
      // if (isDark && document.documentElement.classList.contains('dark')) return
      // else if (!isDark && !document.documentElement.classList.contains('dark')) return
      if (isDark === document.documentElement.classList.contains('dark')) return
      document.documentElement.classList.toggle('dark')
    },
    { deep: true, immediate: false, flush: 'post', once: true },
  )
  watch(
    () => projectInfo.lang,
    (lang) => {
      if (lang !== 'zh') setI18n(lang)
    },
    { deep: true, immediate: false, flush: 'post', once: true },
  )

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
  const getThemeValue = (value) => {
    return getComputedStyle(document.documentElement).getPropertyValue(value)
  }
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark')
    setProjectInfo({
      isDark: !projectInfo.isDark,
    })
  }

  return {
    projectInfo,
    getProjectInfo,
    setProjectInfo,
    clearProjectInfo,
    getThemeValue,
    toggleDark,
  }
})
