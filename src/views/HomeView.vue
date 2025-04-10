<script setup>
import useUtils from '@u'
import useApi from '@a'
import { useUserInfo, useProjectInfo } from '@s'
const utils = useUtils()
const api = useApi()
const userInfo = useUserInfo()
const projectInfo = useProjectInfo()
console.log(utils)
console.log(api)
setTimeout(() => {
  api.test.testGet({ test: 123 })
  api.test.testPost({ test: 1234 })
  api.test.testForm({ test: 12345 })
  console.log(utils.isNe())
  console.log(utils.getDataType())
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
      {{ userInfo.getUserInfo }}
    </pre>
    <button @click="set">设置</button>
    <button @click="userInfo.clearUserInfo">清空</button>
  </main>
</template>
