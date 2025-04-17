<template>
  <div class="demo1-main">
    <button @click="projectInfo.toggleDark()">demo1</button>
  </div>
</template>

<script setup>
import { useProjectInfo } from '@s'
const projectInfo = useProjectInfo()
console.log('demo1.vue', projectInfo.getThemeValue('--placeholder-color'))
console.log('demo1.vue', projectInfo.getThemeValue('--webkit-background-color'))
console.log('demo1.vue', projectInfo.getThemeValue('--color'))
</script>

<style lang="less" scoped>
.demo1-main {
  height: 100%;
}
</style>
