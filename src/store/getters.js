// 使用计算属性快捷访问store的state值
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
  }
}
export default getters
