// 国际化的步骤：
// 1.通过一个语言变量 locale 控制语言环境
// 2.定义好所有语言环境下的数据源 msg
// 3.通过一个方法 t 来获取当前语言下指定属性的值
//   比如：function t(key) {return messages[locale][key]}
// 使用方式：let msg = t['msg.test']

import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'

const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}

const locale = 'en'

const i18n = createI18n({
  // 使用 composition api 要把 legacy 设置为 false
  legacy: false,
  // 全局注册 t 函数
  globalInjection: true,
  locale,
  messages
})

export default i18n
