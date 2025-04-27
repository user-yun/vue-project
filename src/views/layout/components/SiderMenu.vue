<template>
  <!-- <a-affix :offset-top="0" @change="affix.change" />
  <div class="sider-menu-main" :style="main.style"> -->
  <a-menu mode="inline" :theme="menu.theme" :items="menu.items" :selectedKeys="menu.selectedKeys" :openKeys="menu.selectedKeys" />
  <!-- </div> -->
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed, reactive } from 'vue'
import { useUserInfo, useProjectInfo } from '@s'
let projectInfo = useProjectInfo()
let route = useRoute()
// 菜单区域
let menu = reactive({
  theme: computed(() => {
    return projectInfo.getProjectInfo.isDark ? 'dark' : 'light'
  }),
  items: computed(() => {
    return [
      ...projectInfo.getProjectInfo.menuItems,
      ...projectInfo.getProjectInfo.menuItems,
      ...projectInfo.getProjectInfo.menuItems,
      ...projectInfo.getProjectInfo.menuItems,
      ...projectInfo.getProjectInfo.menuItems,
      ...projectInfo.getProjectInfo.menuItems,
      ...projectInfo.getProjectInfo.menuItems,
      ...projectInfo.getProjectInfo.menuItems,
    ]
  }),
  selectedKeys: computed(() => {
    return [route.path]
  }),
})
// 图钉固定
// let affix = reactive({
//   isAffixed: false,
//   change(affixed) {
//     affix.isAffixed = affixed
//   },
// })
// 主要区域处理样式固定
// let main = reactive({
//   style: computed(() => {
//     return {
//       height: affix.isAffixed ? '100vh' : '100%',
//       position: affix.isAffixed ? 'fixed' : 'initial',
//     }
//   }),
// })
</script>

<style lang="less" scoped>
// .sider-menu-main {
//   top: 0;
//   width: 200px;
.ant-menu {
  height: 100%;
  overflow: auto;
}
// }
</style>
