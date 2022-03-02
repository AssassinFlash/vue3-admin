// 处理用户相关的内容
import { login, getUserInfo } from '@/api/sys'
import { setItem, getItem, removeItem } from '@/utils/storage'
import { setTimeStamp } from '@/utils/auth'
import { TOKEN, TIME_STAMP } from '@/constant'
import { ElMessage } from 'element-plus'
import router from '@/router'
import md5 from 'md5'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      // 保存到本地缓存
      setItem(TOKEN, token)
      setTimeStamp()
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 登录请求动作
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((res) => {
            commit('setToken', res.token)
            // 跳转
            router.push('/')
            ElMessage.success('登录成功')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
      const res = await getUserInfo()
      commit('setUserInfo', res)
    },
    // 退出登录
    logout({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', {})
      removeItem(TOKEN)
      removeItem(TIME_STAMP)
      router.push('/login')
      ElMessage.warning('退出登录')
    }
  }
}
