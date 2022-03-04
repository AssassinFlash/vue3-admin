// 校验函数
import i18n from '@/i18n'

export const validatePassword = () => {
  return (rule, value, callback) => {
    value.length >= 6
      ? callback()
      : callback(new Error(i18n.global.t('msg.login.passwordRule')))
  }
}
