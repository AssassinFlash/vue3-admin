<template>
  <!-- 外部图标和内部图标的分开展示 -->
  <!-- 展示外部图标 -->
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    :class="className"
    class="svg-external-icon svg-icon"
  />
  <!-- 展示内部图标 -->
  <svg v-else :class="className" class="svg-icon">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { isExternal as external } from '@/utils/validate'
import { defineProps, computed } from 'vue'

const props = defineProps({
  // 图标名称(路径)
  icon: {
    type: String,
    required: true
  },
  // 图标样式
  className: {
    type: String,
    default: ''
  }
})

// 判断是否为外部图标
const isExternal = computed(() => external(props.icon))
// 外部图标样式
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))

// 内部图标样式
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style scoped>
.svg-icon {
  width: 1.3em;
  height: 1.3em;
  vertical-align: middle;
  text-align: center;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  display: inline-block;
  mask-size: cover !important;
  background-color: currentColor;
}
</style>
