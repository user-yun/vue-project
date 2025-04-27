import { defineAsyncComponent } from 'vue'
import { useUserInfo, useProjectInfo } from '@s'
import useUtils from '@u'
// 异步加载组件
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
// 是否第一次加载路由
let loadRoute = false
// 加载所有文件的路由
const loadModulesRoute = async (router) => {
  // 异步引入文件夹下所有.js 文件
  let modules = import.meta.glob(['./modules/*.js'], {
    import: 'default',
    eager: true,
  })
  let eager = true
  let length = Object.keys(modules).length
  let useRoute = []
  let loadModules = () => {
    return new Promise((resolve) => {
      Object.entries(modules).forEach(([, content], index) => {
        content().then((module) => {
          useRoute.push(...module())
          if (index === length - 1) resolve()
        })
      })
    })
  }
  let asyncModules = () => {
    Object.entries(modules).forEach(([, content]) => {
      useRoute.push(...content())
    })
  }
  if (eager) asyncModules()
  else await loadModules()
  useRoute = await loadAuthMenu(useRoute)
  useRoute.forEach((ur) => {
    router.addRoute(ur)
  })

  loadRoute = true
}
let utils = useUtils()
// 递归处理路由信息
const recursionHandle = (routes, authList) => {
  return routes.filter((route) => {
    let isAuth = authList.includes(route.path)
    if (isAuth && utils.isNeArr(route.children)) route.children = recursionHandle(route.children, authList)
    return isAuth
  })
}
// 递归处理菜单数据
const copyMenuItems = (routes) => {
  return routes.map((route) => {
    route = {
      ...route,
      ...(utils.isNeObj(route.meta?.menu) ? route.meta.menu : {}),
      key: route.path,
    }
    delete route.meta
    if (utils.isNeArr(route.children)) route.children = copyMenuItems(route.children)
    delete route.component
    return route
  })
}
// 模拟加载权限菜单
const loadAuthMenu = (useRoute) => {
  let authList = ['/demo1path', '/demo1', '/demo2', '/demo11path', '/demo2path', '/demo3', '/demo4path', '/demo4', '/demo5']
  useRoute = recursionHandle(useRoute, authList)
  let projectInfo = useProjectInfo()
  projectInfo.setProjectInfo({
    menuItems: copyMenuItems(useRoute),
  })
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(useRoute)
    }, 1000 * 2)
  })
}
// 路由拦截守卫
const beforeEach = async (router) => {
  router.beforeEach(async (to, from, next) => {
    if (loadRoute) next()
    else {
      await loadModulesRoute(router)
      next(to.fullPath)
    }
  })
}
// const rView = h('router-view')
export { AsyncComp, /**rView */ beforeEach }
