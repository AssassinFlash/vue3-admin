<template>
  <!-- 处理 菜单栏title和icon显示的样式 -->
  <i v-if="icon.includes('el-icon')" :class='icon' />
  <SvgIcon v-else :icon='icon' />
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>
