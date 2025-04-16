<template>
  <Suspense>
    <a-config-provider
      :theme="{
        algorithm: defaultAlgorithm,
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
      <router-view />
    </a-config-provider>
  </Suspense>
</template>
<script setup>
// import { RouterView } from 'vue-router'
import { theme } from 'ant-design-vue'
const { defaultAlgorithm, darkAlgorithm } = theme
const renderEmpty = (componentName) => {
  console.log(componentName)
  return '--'
}
const transformCellText = ({ text, column, record, index }) => text || '--'
</script>
<style lang="less" scoped></style>
