import { defineAsyncComponent } from 'vue'
const AsyncComp = (loader) => {
  return defineAsyncComponent({
    // 加载函数
    loader,
    // 加载异步组件时使用的组件
    loadingComponent: defineAsyncComponent(() => import('@v/default/transition/Loading.vue')),
    // 展示加载组件前的延迟时间，默认为 200ms
    delay: 200,
    // 加载失败后展示的组件
    errorComponent: defineAsyncComponent(() => import('@v/default/transition/Loading.vue')),
    // 如果提供了一个 timeout 时间限制，并超时了
    // 也会显示这里配置的报错组件，默认值是：Infinity
    timeout: 3000,
  })
}
let loadRoute = false
const loadModulesRoute = async (router) => {
  // 异步引入文件夹下所有.js 文件
  const modules = import.meta.glob(['./modules/*.js'], {
    import: 'default',
    eager: true,
  })
  let eager = true
  let length = Object.keys(modules).length
  let useRoute = []
  const loadModules = () => {
    return new Promise((resolve) => {
      Object.entries(modules).forEach(([, content], index) => {
        content().then((module) => {
          useRoute.push(...module())
          if (index === length - 1) resolve()
        })
      })
    })
  }
  const asyncModules = () => {
    Object.entries(modules).forEach(([, content]) => {
      useRoute.push(...content())
    })
  }
  if (eager) asyncModules()
  else await loadModules()
  useRoute.forEach((ur) => {
    router.addRoute(ur)
  })
  loadRoute = true
}
const beforeEach = async (router) => {
  router.beforeEach(async (to, from, next) => {
    console.log(to)
    if (loadRoute) next()
    else {
      await loadModulesRoute(router)
      next(to.fullPath)
    }
  })
}
// const rView = h('router-view')
export { AsyncComp, /**rView */ beforeEach }
