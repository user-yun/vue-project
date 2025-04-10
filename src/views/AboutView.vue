<template>
  <div class="about">
    <h1 @click="projectInfo.clearProjectInfo">This is an about page</h1>
    <pre>{{ projectInfo.getProjectInfo }}</pre>
  </div>
</template>
<script setup>
import { useProjectInfo } from '@s'
const projectInfo = useProjectInfo()
</script>
