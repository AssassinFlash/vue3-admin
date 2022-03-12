import { getItem, setItem } from '@/utils/storage'
import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR
  }),
  // 设置主题色
  mutations: {
    setMainColor(state, newColor) {
      setItem(MAIN_COLOR, newColor)
      state.mainColor = newColor
    }
  }
}
