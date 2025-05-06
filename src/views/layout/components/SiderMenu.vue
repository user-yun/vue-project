<template>
  <a-menu
    mode="inline"
    :theme="menu.theme"
    :items="menu.items"
    :selectedKeys="menu.selectedKeys"
    :openKeys="menu.openKeys"
    @click="menu.menuClick"
  />
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
    return [route.meta?.menu?.selectedKey || route.path]
  }),
  findOpenKeys: () => {},
  openKeys: [],
  menuClick: ({ item, key, keyPath }) => {
    router.push({
      path: key,
    })
  },
})
if (route.matched) {
  menu.openKeys = []
  let len = route.matched.length - 1
  for (let index = 0; index < len; index++) {
    let item = route.matched[index]
    menu.openKeys.push(item.path)
  }
}
</script>

<style lang="less" scoped>
.ant-menu {
  height: 100%;
  overflow: auto;
  border: none;
}
</style>
