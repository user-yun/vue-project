<template>
  <div class="demo1-main">
    <button @click="projectInfo.toggleDark()">demo1</button>
    <home-outlined />
    <setting-filled />
    <smile-outlined />
    <sync-outlined spin />
    <smile-outlined :rotate="180" />
    <loading-outlined />
    <a-input placeholder="Basic usage" />
    <component :is="'HomeOutlined'" />
    <div class="a20vh"></div>
    <div class="a20vh"></div>
    <div class="a20vh"></div>
    <div class="a20vh"></div>
    <div class="a20vh"></div>
    <div class="a20vh"></div>
    <div class="a20vh"></div>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { useProjectInfo } from '@s'

const projectInfo = useProjectInfo()
console.log('demo1.vue', projectInfo.getThemeValue('--placeholder-color'))
console.log('demo1.vue', projectInfo.getThemeValue('--webkit-background-color'))
console.log('demo1.vue', projectInfo.getThemeValue('--color'))
</script>

<style lang="less" scoped>
.demo1-main {
  .a20vh {
    height: 20vh;
    &:nth-child(2n) {
      background: red;
    }
  }
}
</style>
