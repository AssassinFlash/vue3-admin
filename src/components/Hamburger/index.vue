<template>
  <!-- 菜单伸缩显示的图标 -->
  <div class='hamburger-container' @click='toggleClick'>
    <SvgIcon :icon='icon' class='hamburger' />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const icon = computed(() =>
  store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed')
const toggleClick = () => {
  store.commit('app/triggerSidebarOpened')
}
</script>

<style lang='scss' scoped>
.hamburger-container {
  height: 100%;
  line-height: 46px;
  padding: 0 16px;
  cursor: pointer;
  float: left;
  // hover 动画
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  .hamburger {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
}
</style>
