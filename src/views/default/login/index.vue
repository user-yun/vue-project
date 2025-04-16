<template>
  <div class="login-main">
    <div class="login-main_content">
      <a-form layout="vertical" ref="formRef" :model="formReactive.formModel" :rules="formReactive.formRules" scrollToFirstError>
        <a-form-item label="Username" name="username">
          <a-input v-model:value="formReactive.formModel.username" />
        </a-form-item>
        <a-form-item label="Password" name="password">
          <a-input-password v-model:value="formReactive.formModel.password" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block @click="formReactive.handleLogin">Login</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
const defaultFormModel = {
  username: '',
  password: '',
}
const formRef = ref()
const formReactive = reactive({
  formModel: structuredClone(defaultFormModel),
  formRules: {
    username: [{ required: true, message: 'Please input username', trigger: 'blur' }],
    password: [{ required: true, message: 'Please input password', trigger: 'blur' }],
  },
  handleLogin() {
    formReactive.handleValidate().then(() => {
      message.success('login')
    })
  },
  async handleValidate() {
    await formRef.value
      .validate()
      .then(() => {
        return Promise.resolve()
      })
      .catch((error) => {
        console.error(error)
        return Promise.reject()
      })
  },
})
</script>

<style lang="less" scoped>
.login-main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff7e5f, #feb47b, #81ecec, #74b9ff), linear-gradient(45deg, #81ecec, #74b9ff, #ff7e5f, #feb47b);
  background-blend-mode: overlay; /* 或者使用其他混合模式如 'multiply', 'screen', 'overlay' 等 */
  &_content {
    width: 500px;
    height: 400px;
    border-radius: 20px;
    // background-color: #ffffff;
    box-shadow:
      // h-shadow：水平阴影位移，大于0时阴影右移，小于0时阴影左移；
      // v-shadow：垂直阴影位移，大于0时阴影下移，小于0是阴影上移；
      // blur：可选参数，阴影模糊半径，值越大颜色越淡，阴影越模糊，为正值，默认为0；
      // spread：可选参数，阴影扩散半径，值越大阴影面积越大，可正可负，默认为0；
      // color：可选参数，阴影颜色，默认为黑色；
      // inset：可选参数，内阴影，一般放在开头或末尾
      2px 2px 7px rgba(0, 0, 0, 0.059) inset,
      2px 2px 14px rgba(0, 0, 0, 0.059);
    padding: 80px;
  }
}
</style>
