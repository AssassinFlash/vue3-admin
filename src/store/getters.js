// 使用计算属性快捷访问store的state值
import variables from '@/styles/variables.scss'

const getters = {
  token(state) {
    return state.user.token
  },
  userInfo(state) {
    return state.user.userInfo
  },
  hasUserInfo(state) {
    // 这是因为 userInfo 初始值就是一个空对象
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar(state) {
    // 返回菜单栏样式
    return variables
  },
  sidebarOpened(state) {
    return state.app.sidebarOpened
  },
  language(state) {
    return state.app.language
  },
  mainColor(state) {
    return state.theme.mainColor
  }
}
export default getters
