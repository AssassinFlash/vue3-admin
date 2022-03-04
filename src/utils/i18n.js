// 将 title 转化为国际化内容
import i18n from '@/i18n'

export const generateTitle = (title) => {
  return i18n.global.t(`msg.route.${title}`)
}
