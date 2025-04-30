import { createI18n, useI18n } from 'vue-i18n'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // 导入本地化语言
import 'dayjs/locale/en-gb' // 导入本地化语言
import en_GB from 'ant-design-vue/es/locale/en_GB'
import zh_CN from 'ant-design-vue/es/locale/zh_CN'
import stores, { useUserInfo, useProjectInfo } from '@s'
import useUtils from '@u'

let i18nConfig = {
  list: [
    {
      title: '中文',
      value: 'zh',
    },
    {
      title: 'English',
      value: 'en',
    },
  ],
  i18n: {
    zh: 'zh',
    en: 'en',
  },
  dayjs: {
    zh: 'zh-cn',
    en: 'en-gb',
  },
  antd: {
    zh: 'zh_CN',
    en: 'en_GB',
  },
}
let useMessages = {}
const initLoad = async () => {
  // 异步引入文件夹下所有.js 文件
  const modules = import.meta.glob(['./modules/*.js'], {
    import: 'default',
    eager: true,
  })
  let eager = true
  const loadModules = () => {
    return new Promise((resolve) => {
      let regex = /\.\/modules\/(\w+)\.js/
      Object.entries(modules).forEach(([path, content], index) => {
        content().then((module) => {
          let names = regex.exec(path)
          if (names?.[1]) useMessages[names[1]] = module
          if (index === length - 1) resolve()
        })
      })
    })
  }
  const asyncModules = () => {
    let regex = /\.\/modules\/(\w+)\.js/
    Object.entries(modules).forEach(([path, content]) => {
      let names = regex.exec(path)
      if (names?.[1]) useMessages[names[1]] = content
    })
  }
  if (eager) asyncModules()
  else await loadModules()
}

let utils = useUtils()
if (!utils.isNeObj(useMessages)) {
  await initLoad()
}

const i18n = createI18n({
  // 使用 composition API
  legacy: false, // 让 setup 函数可以通过 t 访问
  // 全局使用 t 函数
  globalInjection: true, // 让 template 可以像 vue2 那样使用 $t 来访问
  locale: 'zh', // 默认语言
  fallbackLocale: 'zh', // 当未提供所需语言的翻译时，将回退到的语言
  messages: useMessages, //此时的语言类型，例如：Chinese,Eglish等
})
dayjs.locale('zh-cn') // 使用本地化语言
// 重新设置语言
const setI18n = (lang) => {
  let projectInfo = useProjectInfo()
  projectInfo.setProjectInfo({
    loadRoute: true,
    lang,
  })
  i18n.global.locale.value = i18nConfig.i18n[lang]
  dayjs.locale(i18nConfig.dayjs[lang]) // 使用本地化语言
}
// 获取当前支持的语言列表
const getI18ns = () => i18nConfig.list

const getAntdI18n = (lang) => {
  let antdI18n = {
    en_GB,
    zh_CN,
  }
  return antdI18n[i18nConfig.antd[lang]]
}
export { setI18n, getI18ns, getAntdI18n }
export default i18n
