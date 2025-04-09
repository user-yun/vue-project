// 异步引入文件夹下所有.js 文件
const modules = import.meta.glob(['./modules/*.js'], {
  import: 'default',
  eager: true,
})
let eager = true
let length = Object.keys(modules).length
let useUtils = {}
const loadModules = () => {
  return new Promise((resolve) => {
    Object.entries(modules).forEach(([, content], index) => {
      content().then((module) => {
        useUtils = { ...useUtils, ...module }
        if (index === length - 1) resolve()
      })
    })
  })
}
const asyncModules = () => {
  Object.entries(modules).forEach(([, content]) => {
    useUtils = { ...useUtils, ...content }
  })
}
const utilsInstall = () => {
  return {
    install(Vue /**options**/) {
      if (eager) {
        asyncModules()
        Vue.config.globalProperties.$utils = useUtils
      } else
        loadModules().then(() => {
          Vue.config.globalProperties.$utils = useUtils
        })
    },
  }
}
export { utilsInstall }
export default () => {
  if (eager) {
    asyncModules()
    return useUtils
  } else
    return new Promise((resolve) => {
      loadModules().then(() => {
        resolve(useUtils)
      })
    })
}
