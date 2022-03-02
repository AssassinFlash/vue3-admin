import { setItem, getItem } from '@/utils/storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
// 获取时间戳
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}
// 设置时间戳
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}
// 是否超时
export function isCheckTimeout() {
  // 当前时间戳 - 缓存的时间戳
  const currentTime = Date.now()
  const timeStamp = getItem(TIME_STAMP)
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
