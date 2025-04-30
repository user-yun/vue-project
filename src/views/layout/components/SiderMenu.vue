<template>
  <!-- <a-affix :offset-top="0" @change="affix.change" />
  <div class="sider-menu-main" :style="main.style"> -->
  <a-menu
    mode="inline"
    :theme="menu.theme"
    :items="menu.items"
    :selectedKeys="menu.selectedKeys"
    :inlineCollapsed="menu.inlineCollapsed"
    @click="menu.click"
    @openChange="menu.openChange"
  />
  <!-- </div> -->
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed, reactive, h } from 'vue'
import { useUserInfo, useProjectInfo } from '@s'
import useUtils from '@u'
import AIcons from '@c/AIcons'
import i18n from '@i'

let projectInfo = useProjectInfo()
let route = useRoute()
let router = useRouter()
let utils = useUtils()
// 菜单区域
let menu = reactive({
  theme: computed(() => {
    return projectInfo.getProjectInfo.isDark ? 'dark' : 'light'
  }),
  handleItemChildren: (items) => {
    let { t } = i18n.global
    return items.map((item) => {
      item = {
        ...item,
        label: t(`menu.${item.label}`),
        title: t(`menu.${item.title}`),
        icon: utils.isNe(item.icon) ? h(AIcons(item.icon)) : '',
      }
      if (utils.isNeArr(item.children)) item.children = menu.handleItemChildren(item.children)
      return item
    })
  },
  items: computed(() => {
    return menu.handleItemChildren(projectInfo.getProjectInfo.menuItems)
  }),
  selectedKeys: computed(() => {
    return [route.path]
  }),
  findOpenKeys: () => {},
  openKeys: [],
  inlineCollapsed: false,
  click: ({ item, key, keyPath }) => {
    router.push({
      path: key,
    })
  },
  openChange: (openKeys) => {
    console.log(openKeys)
    menu.openKeys = openKeys
  },
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
