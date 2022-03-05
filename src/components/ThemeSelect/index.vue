<template>
  <!-- 主题图标组件 -->
  <!-- $attrs包含了父作用域中不作为组件props所绑定的属性 -->
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="handleSetTheme"
  >
    <div>
      <SvgIcon icon="change-theme" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
    <!-- 展示弹出层 -->
    <div>
      <SelectColor v-model="selectColorVisible" />
    </div>
  </el-dropdown>
</template>

<script setup>
import SelectColor from './components/SelectColor.vue'
import { ref } from 'vue'

// 控制 dialog 显示与关闭
const selectColorVisible = ref(false)
const handleSetTheme = (color) => {
  selectColorVisible.value = true
}
</script>

<style lang="scss" scoped></style>
