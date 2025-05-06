<template>
  <div class="demo1-main">
    <button @click="toggleDark">demo1</button>
    <button @click="setI18n('en')">demo1</button>
    <button @click="setI18n('zh')">demo1</button>
    <home-outlined />
    <setting-filled />
    <smile-outlined />
    <sync-outlined spin />
    <smile-outlined :rotate="180" />
    <loading-outlined />
    <a-input />
    <a-date-picker />
    <component :is="'HomeOutlined'" />
    {{ $t('menu.adminGroup1') }}
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
import { useProjectInfo } from '@s'
import { setI18n } from '@i'
import useUtils from '@u'

let utils = useUtils()

const projectInfo = useProjectInfo()
console.log('demo1.vue', projectInfo.getThemeValue('--placeholder-color'))
console.log('demo1.vue', projectInfo.getThemeValue('--webkit-background-color'))
console.log('demo1.vue', projectInfo.getThemeValue('--color'))
const toggleDark = () => {
  utils.toggleAnimation(() => projectInfo.toggleDark())
}
</script>

<style lang="less" scoped>
.demo1-main {
  .a20vh {
    height: 20vh;
    &:nth-child(1n) {
      background: blueviolet;
    }
    &:nth-child(2n) {
      background: red;
    }
  }
}
</style>
