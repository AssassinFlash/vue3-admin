// 功能数据驱动
import { setItem, getItem } from '@/utils/storage'
import { LANG } from '@/constant'

export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage(state, language) {
      state.language = language
      setItem(LANG, language)
    }
  }
}
