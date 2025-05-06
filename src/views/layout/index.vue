<template>
  <a-layout class="layout-main">
    <!-- 头部 顶部-->
    <a-layout-header class="layout-main_header">
      <top-header />
    </a-layout-header>
    <!-- 头部下方 水平分布 -->
    <a-layout class="layout-main_horizontal">
      <!-- 下方左侧 菜单栏-->
      <a-layout-sider class="layout-main_sider" collapsible>
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
  &_content,
  &_footer {
    background: transparent;
  }
  &_sider {
    box-shadow: // h-shadow：水平阴影位移，大于0时阴影右移，小于0时阴影左移；
      // v-shadow：垂直阴影位移，大于0时阴影下移，小于0是阴影上移；
      // blur：可选参数，阴影模糊半径，值越大颜色越淡，阴影越模糊，为正值，默认为0；
      // spread：可选参数，阴影扩散半径，值越大阴影面积越大，可正可负，默认为0；
      // color：可选参数，阴影颜色，默认为黑色；
      // inset：可选参数，内阴影，一般放在开头或末尾
      7px 0px 7px 0px rgba(0, 0, 0, 0.059);
    :deep(.ant-layout-sider-trigger) {
      background: @menuBackground;
      color: @color;
    }
  }
  &_header {
    background: @theme;
  }
  &_content {
    overflow: auto;
  }
}
</style>
