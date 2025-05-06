<template>
  <div class="top-header-main">
    <h1 class="top-header-main_left">
      <img src="https://next.antdv.com/assets/logo.1ef800a8.svg" alt="icon" />
      {{ appTitle }}
    </h1>
    <div class="top-header-main_right">
      <a-divider type="vertical" />
      <a-dropdown :trigger="['click']">
        <a-avatar shape="square" :size="32" alt="user" @click.prevent>
          <template #icon><user-outlined /></template>
        </a-avatar>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <a href="http://www.alipay.com/">1st menu item</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="http://www.taobao.com/">2nd menu item</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">3rd menu item</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup>
const appTitle = import.meta.env.VITE_APP_TITLE
</script>

<style lang="less" scoped>
.top-header-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &_left {
    margin: 0;
    width: 200px;
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      margin-right: 12px;
    }
  }
  &_right {
    display: flex;
    align-items: center;
  }
}
</style>
