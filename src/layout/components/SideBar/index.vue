<template>
  <div>
    <div class='logo-container'>
      <el-avatar
        :size='logoHeight'
        shape='square'
        src='https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png'
      />
      <h1 class='logo-title' v-if='$store.getters.sidebarOpened'>
        imooc-admin
      </h1>
    </div>
    <el-scrollbar>
      <SidebarMenu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'

const logoHeight = 44
</script>

<style lang='scss' scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo-title {
    line-height: 50px;
    margin-left: 10px;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    white-space: nowrap;
  }
}
</style>
