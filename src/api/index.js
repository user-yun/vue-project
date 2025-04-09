// 异步引入文件夹下所有.js 文件
const modules = import.meta.glob(['./modules/*.js'], {
  import: 'default',
  eager: true,
})
let eager = true
let length = Object.keys(modules).length
let useApi = {}
const loadModules = () => {
  return new Promise((resolve) => {
    const regex = /\.\/modules\/(\w+)\.js/
    Object.entries(modules).forEach(([path, content], index) => {
      content().then((module) => {
        const names = regex.exec(path)
        if (names?.[1]) useApi[names[1]] = module
        if (index === length - 1) resolve()
      })
    })
  })
}
const asyncModules = () => {
  const regex = /\.\/modules\/(\w+)\.js/
  Object.entries(modules).forEach(([path, content]) => {
    const names = regex.exec(path)
    if (names?.[1]) useApi[names[1]] = content
  })
}

const apiInstall = () => {
  return {
    install(Vue /**options**/) {
      if (eager) {
        asyncModules()
        Vue.config.globalProperties.$api = useApi
      } else
        loadModules().then(() => {
          Vue.config.globalProperties.$api = useApi
        })
    },
  }
}
export { apiInstall }
export default () => {
  if (eager) {
    asyncModules()
    return useApi
  } else
    return new Promise((resolve) => {
      loadModules().then(() => {
        resolve(useApi)
      })
    })
}

// 链接：https://juejin.cn/post/7485263262507925531

// 1. 基本异步导入
// const modules = import.meta.glob('./modules/*.ts')
// async function loadModules() {
//   // 遍历所有匹配的模块
//   for (const path in modules) {
//     // 等待模块加载完成
//     const module = await modules[path]()
//     // 输出模块路径和内容
//     console.log('模块路径:', path)
//     console.log('模块内容:', module)
//   }
// }

// 2. 同步导入（eager 模式）
// const eagerModules = import.meta.glob('./modules/*.ts', {
//   eager: true, // 设置为 true 表示同步导入
// })

// 3. 导入特定内容
// const specificImports = import.meta.glob('./components/*.vue', {
//   import: 'default', // 只导入默认导出
//   eager: true,
// })

// 4. 多种导入内容
// const multipleImports = import.meta.glob('./components/*.vue', {
//   import: ['default', 'setup'], // 导入多个指定内容
//   eager: true,
// })

// 5. 以 URL 形式导入
// const imageUrls = import.meta.glob('./assets/*.png', {
//   query: '?url', // 作为 URL 导入
// })

// 6. 导入原始内容
// const rawContents = import.meta.glob('./files/*.md', {
//   query: '?raw', // 作为原始文本导入
// })

// 7. 多模式匹配
// const multiPattern = import.meta.glob([
//   './components/**/*.vue', // 匹配所有子目录的 Vue 文件
//   '!./components/ignored/*.vue', // 排除特定目录
// ])
