<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import useUtils from '@u'
import useApi from '@a'
const utils = useUtils()
const api = useApi()
console.log(utils)
console.log(api)
setTimeout(() => {
  api.test.testGet({ test: 123 })
  api.test.testPost({ test: 1234 })
  api.test.testForm({ test: 12345 })
  console.log(utils.isNe())
  console.log(utils.getDataType())
}, 3000)
</script>

<template>
  <main>
    1111111111111
    <TheWelcome />
  </main>
</template>
