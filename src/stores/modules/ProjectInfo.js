import { reactive, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { theme } from 'ant-design-vue'
import useUtils from '@u'
const utils = useUtils()
export default defineStore('project-info', () => {
  const projectInfo = reactive({
    // 默认非黑夜模式
    isDark: false,
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
    { deep: true, immediate: true, flush: 'post', once: true },
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
  const getAlgorithm = computed(() => {
    const { defaultAlgorithm, darkAlgorithm } = theme
    return projectInfo.isDark ? darkAlgorithm : defaultAlgorithm
  })
  const getThemeValue = (value) => {
    return getComputedStyle(document.documentElement).getPropertyValue(value)
  }
  const toggleDark = () => {
    // 执行切换主题的操作
    const transition = document.startViewTransition(() => {
      // 动画过渡切换主题色
      document.documentElement.classList.toggle('dark')
      setProjectInfo({
        isDark: !projectInfo.isDark,
      })
    })
    // document.startViewTransition 的 ready 返回一个 Promise
    transition.ready.then(() => {
      // 获取鼠标的坐标
      // const { clientX, clientY } = e
      const [clientX, clientY] = [utils.getRandomInRange(0, window.innerWidth), utils.getRandomInRange(0, window.innerHeight)]
      // 计算最大半径
      const radius = Math.hypot(Math.max(clientX, innerWidth - clientX), Math.max(clientY, innerHeight - clientY))
      // 圆形动画扩散开始
      document.documentElement.animate(
        {
          clipPath: [`circle(0% at ${clientX}px ${clientY}px)`, `circle(${radius}px at ${clientX}px ${clientY}px)`],
        },
        // 设置时间，以及目标伪元素
        {
          duration: 800,
          pseudoElement: '::view-transition-new(root)',
        },
      )
    })
  }

  return { projectInfo, getProjectInfo, setProjectInfo, clearProjectInfo, getAlgorithm, getThemeValue, toggleDark }
})
