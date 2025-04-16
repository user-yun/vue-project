<template>
  <div class="transition-main">
    <div class="transition-main_content">{{ loading }}</div>
  </div>
</template>

<script setup>
import { onUnmounted, ref } from 'vue'

const loading = ref('Loading...')
const timeout = setTimeout(() => {
  loading.value = 'Load Fail'
}, 3000)
onUnmounted(() => {
  clearTimeout(timeout)
})
</script>

<style lang="less" scoped>
.transition-main {
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  &_content {
    font-size: 100px;
  }
}
</style>
