<template>
  <!-- command 点击选项触发的回调函数 -->
  <el-dropdown
    trigger='click'
    @command='handleSetLanguage'
  >
    <div>
      <!-- effect 背景色 -->
      <el-tooltip content='国际化' :effect='effect'>
        <SvgIcon icon='language' />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <!-- command 派发到选项触发回调函数的参数 -->
        <el-dropdown-item :disabled="language === 'zh'" command='zh'>
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command='en'>
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { defineProps, computed } from 'vue'

defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator(value) {
      return ['dark', 'light'].indexOf(value) !== -1
    }
  }
})

const store = useStore()
const language = computed(() => store.getters.language)

// 切换语言的方法
const i18n = useI18n()
const handleSetLanguage = (lang) => {
  i18n.locale.value = lang
  store.commit('app/setLanguage', lang)
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
}
</script>

<style lang='scss' scoped>
</style>
