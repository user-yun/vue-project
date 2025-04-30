<template>
  <Suspense v-if="reload">
    <a-config-provider
      :theme="{
        algorithm: getAlgorithm,
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
      :locale="locale"
    >
      <router-view v-slot="{ Component }">
        <component v-if="Component" :is="Component" />
        <Loading v-else />
      </router-view>
    </a-config-provider>
  </Suspense>
  <Loading v-else />
</template>
<script setup>
// import { RouterView } from 'vue-router'
import Loading from '@/views/default/transition/Loading.vue'
import { theme } from 'ant-design-vue'
import { useProjectInfo } from '@s'
import { getAntdI18n } from '@i'
import useUtils from '@u'
import { watch, ref, computed } from 'vue'
let projectInfo = useProjectInfo()
let utils = useUtils()
let renderEmpty = (componentName) => {
  console.log('App.vue', componentName)
  return '--'
}
let getAlgorithm = computed(() => {
  let { defaultAlgorithm, darkAlgorithm } = theme
  return projectInfo.getProjectInfo.isDark ? darkAlgorithm : defaultAlgorithm
})
let locale = computed(() => {
  return getAntdI18n(projectInfo.getProjectInfo.lang)
})
let reload = ref(true)
let reloadTimeout = null
watch(
  () => [projectInfo.getProjectInfo.isDark],
  () => {
    clearTimeout(reloadTimeout)
    reload.value = false
    reloadTimeout = setTimeout(() => {
      reload.value = true
    }, 1000)
  },
  { deep: true, immediate: true, flush: 'post' },
)
let transformCellText = ({ text, column, record, index }) => text || '--'
</script>
<style lang="less" scoped></style>
