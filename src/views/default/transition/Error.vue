<template>
  <div class="error-main">
    <div class="error-main_content">404</div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.error-main {
  height: 100%;
  background: linear-gradient(135deg, #ff7e5f, #feb47b, #81ecec, #74b9ff), linear-gradient(45deg, #81ecec, #74b9ff, #ff7e5f, #feb47b);
  background-blend-mode: overlay; /* 或者使用其他混合模式如 'multiply', 'screen', 'overlay' 等 */
  display: flex;
  align-items: center;
  justify-content: center;
  &_content {
    color: transparent;
    font-size: 300px;
    background: linear-gradient(45deg, #0bdfc9, #abe92f, #f7c5cd, #38baf7, #cf63e2, #df61c3, #cf63e2, #38baf7, #f7c5cd, #abe92f, #0bdfc9);
    background-clip: text;
    animation: huerotate 2s infinite;
    @keyframes huerotate {
      100% {
        filter: hue-rotate(360deg);
      }
    }
  }
}
</style>
