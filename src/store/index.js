import { createStore } from 'vuex'
import user from './modules/user'
import app from './modules/app'
import theme from './modules/theme'
import getters from '@/store/getters'

export default createStore({
  modules: {
    user,
    app,
    theme
  },
  getters
})
