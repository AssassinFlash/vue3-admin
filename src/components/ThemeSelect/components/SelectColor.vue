<template>
  <!-- modelValue是父组件通过v-model传给这个组件的值，用于控制dialog组件显示或隐藏 -->
  <!-- 修改这个值要通知父组件，所以这里相当于是组件间的数据通信 -->
  <el-dialog
    :title="$t('msg.universal.title')"
    :model-value="modelValue"
    width="22%"
    @close="closed"
  >
    <!-- 着色器 -->
    <div class="center">
      <p class="title">{{ $t('msg.theme.themeColorChange') }}</p>
      <el-color-picker
        v-model="mColor"
        :predefine="predefineColors"
      ></el-color-picker>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">
          {{ $t('msg.universal.cancel') }}
        </el-button>
        <el-button type="primary" @click="confirm">
          {{ $t('msg.universal.confirm') }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { useStore } from 'vuex'
import { defineProps, defineEmits, ref } from 'vue'
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
const emits = defineEmits(['update:modelValue'])

// 预定义色值
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
]

// 默认色值
const store = useStore()
const mColor = ref(store.getters.mainColor)

// 关闭
const closed = () => {
  emits('update:modelValue', false)
}

// 确定：
// 1. 修改主题色
// 2. 保存最新的主题色
// 3. 关闭 dialog
const confirm = () => {
  store.commit('theme/setMainColor', mColor.value)
  closed()
}
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
  .title {
    margin-bottom: 12px;
  }
}
</style>
