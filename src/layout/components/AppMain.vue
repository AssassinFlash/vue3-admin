<template>
  <div class="app-main">主要内容</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-main {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  // 浏览器可视区域高度: 100vh
  min-height: calc(100vh - 50px);
  padding: 61px 20px 20px 20px;
  overflow: hidden;
}
</style>
