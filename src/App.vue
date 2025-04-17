<template>
  <Suspense>
    <a-config-provider
      :theme="{
        algorithm: projectInfo.getAlgorithm,
      }"
      componentSize="middle"
      :input="{
        allowClear: true,
        maxlength: 200,
      }"
      :renderEmpty="renderEmpty"
      :space="{
        align: 'center',
        size: 'middle',
        wrap: true,
      }"
      :transformCellText="transformCellText"
    >
      <router-view v-if="reload" />
    </a-config-provider>
  </Suspense>
</template>
<script setup>
// import { RouterView } from 'vue-router'
// import { theme } from 'ant-design-vue'
// const { defaultAlgorithm, darkAlgorithm } = theme
import { useProjectInfo } from '@s'
import { watch, ref } from 'vue'
const projectInfo = useProjectInfo()
const renderEmpty = (componentName) => {
  console.log('App.vue', componentName)
  return '--'
}
const reload = ref(true)
let reloadTimeout = null
watch(
  () => projectInfo.getProjectInfo.isDark,
  () => {
    clearTimeout(reloadTimeout)
    reload.value = false
    reloadTimeout = setTimeout(() => {
      reload.value = true
    }, 700)
  },
  { deep: true, immediate: true, flush: 'post' },
)
const transformCellText = ({ text, column, record, index }) => text || '--'
</script>
<style lang="less" scoped></style>
