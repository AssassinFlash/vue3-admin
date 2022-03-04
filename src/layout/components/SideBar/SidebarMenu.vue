<template>
  <!-- 一级 menu 菜单 -->
  <!-- 绑定defaultActive为当前打开的url，这样刷新页面也不会丢失高亮菜单 -->
  <el-menu
    uniqueOpened
    :collapse='!$store.getters.sidebarOpened'
    :default-active='activeMenu'
    :background-color='$store.getters.cssVar.menuBg'
    :text-color='$store.getters.cssVar.menuText'
    :active-text-color='$store.getters.cssVar.menuActiveText'
    router
  >
    <SidebarItem v-for='item in routes' :key='item.path' :route='item' />
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem'

const router = useRouter()
const routes = computed(() => generateMenus(filterRoutes(router.getRoutes())))
const route = useRoute()
const activeMenu = computed(() => route.path)
</script>

<style lang='scss' scoped></style>
