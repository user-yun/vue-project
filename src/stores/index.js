import { createPinia } from 'pinia'
import useUserInfo from './modules/UserInfo'
import useProjectInfo from './modules/ProjectInfo'

const pinia = createPinia()
// https://blog.csdn.net/Pro_er/article/details/146137241
// 持久化插件
const piniaPluginPersistedState = ({ store }) => {
  // 从localStorage恢复状态
  let savedState = localStorage.getItem(store.$id)
  if (savedState) {
    let patchInfo = JSON.parse(savedState)
    if (store.$id === 'project-info') {
      // 处理个别值的初始值
      patchInfo.projectInfo.loadRoute = true
      patchInfo.projectInfo.menuItems = []
    }
    store.$patch(patchInfo)
  }
  // 监听变化自动保存
  store.$subscribe((mutation, state) => {
    localStorage.setItem(store.$id, JSON.stringify(state))
  })
}
pinia.use(piniaPluginPersistedState)
export { useUserInfo, useProjectInfo }
export default pinia
