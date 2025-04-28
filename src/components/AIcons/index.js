import * as AIcons from '@ant-design/icons-vue'
const aIconsInstall = () => {
  return {
    install(Vue /**options**/) {
      // 配置全局对象
      Vue.config.globalProperties.$aIcons = AIcons
      // Antd 注入全部图标（这样注入之后，就可以全局直接使用 icon 组件，不需要每个页面去引入了）
      for (const key in AIcons) {
        Vue.component(key, AIcons[key])
      }
    },
  }
}
export { aIconsInstall }
export default (icon) => {
  // 返回展开所有的icon
  //   import AIcons from '@c/AIcons'
  //   console.log(AIcons())
  if (icon) return AIcons[icon]
  return {
    ...AIcons,
  }
}
