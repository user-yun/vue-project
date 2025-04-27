<template>
  <a-layout class="layout-main">
    <!-- 头部 顶部-->
    <a-layout-header class="layout-main_header">
      <top-header />
    </a-layout-header>
    <!-- 头部下方 水平分布 -->
    <a-layout class="layout-main_horizontal">
      <!-- 下方左侧 菜单栏-->
      <a-layout-sider class="layout-main_sider">
        <sider-menu />
      </a-layout-sider>
      <!-- 下方右侧 垂直分布 -->
      <a-layout class="layout-main_vertical">
        <!-- 下方右侧中间 主要区域 -->
        <a-layout-content class="layout-main_content">
          <router-view />
        </a-layout-content>
        <!-- 下方右侧底部 页脚 -->
        <a-layout-footer class="layout-main_footer">
          <bottom-footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup>
import SiderMenu from './components/SiderMenu.vue'
import TopHeader from './components/TopHeader.vue'
import BottomFooter from './components/BottomFooter.vue'
import { useUserInfo, useProjectInfo } from '@s'
let projectInfo = useProjectInfo()
</script>

<style lang="less" scoped>
.layout-main {
  height: 100%;
  &,
  &_horizontal,
  &_vertical,
  &_sider,
  &_footer {
    background: transparent;
  }
  &_header {
    background: @theme;
  }
  &_content {
    overflow: auto;
  }
}
</style>
