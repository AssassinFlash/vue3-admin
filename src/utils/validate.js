// 判断是否为外部网络资源
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
