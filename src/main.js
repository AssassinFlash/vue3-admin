import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import installElementPlus from './plugins/element'

// 导入初始化样式
import './styles/index.scss'
// 导入styles样式
import './styles/sidebar.scss'

// 导入svg和SvgIcon组件进行全局注册
import installIcons from '@/icons'

// 导入全局守卫
import '@/permission'

// 导入国际化
import i18n from './i18n'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')
