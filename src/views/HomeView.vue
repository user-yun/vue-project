<script setup>
import useUtils from '@u'
import useApi from '@a'
import { useUserInfo, useProjectInfo } from '@s'
const utils = useUtils()
const api = useApi()
const userInfo = useUserInfo()
const projectInfo = useProjectInfo()
setTimeout(() => {
  api.Test.testGet({ test: 123 })
  api.Test.testPost({ test: 1234 })
  api.Test.testForm({ test: 12345 })
}, 3000)
const set = () => {
  userInfo.setUserInfo({
    [new Date()]: new Date(),
    123: new Date(),
  })
  projectInfo.setProjectInfo({
    [new Date()]: new Date(),
    123: new Date(),
  })
}
</script>

<template>
  <main>
    1111111111111
    <pre>
      {{ userInfo.userInfo }}
    </pre>
    <pre>
      {{ projectInfo.projectInfo }}
    </pre>
    <pre>
      {{ userInfo.getUserInfo }}
    </pre>
    <button @click="set">设置</button>
    <button @click="userInfo.clearUserInfo">清空</button>
  </main>
</template>
