<template>
  <a-layout class="layout-main">
    <a-layout-header>Header1111111111</a-layout-header>
    <a-layout>
      <a-layout-sider><sider-menu /><SiderMenu /> </a-layout-sider>
      <a-layout-content>
        contentcontentcontentcontent
        <router-view />
      </a-layout-content>
      <a-layout-footer>Footer1111111111</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup>
import SiderMenu from './components/SiderMenu.vue'
</script>

<style lang="less" scoped>
.layout-main {
  height: 100%;
}
</style>
