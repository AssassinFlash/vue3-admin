// 使用 router.getRoutes()返回的路由是完整的路由，但这不是我们想要的路由
// 比如：/user/manage这个一级路由出现了，下面/user的children又会出现/user/manage
// 这使得路由重复出现，我们的目的是要把重复出现的一级路由剔除，
// 同时由于要渲染菜单，路由必须要有meta属性的title和icon

import path from 'path'

// 判断是否为空
const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

// 获取所有的children路由
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach((route) => {
    if (!isNull(route.children) && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

// 处理重复路由
export const filterRoutes = (routes) => {
  const childrenRoutes = getChildrenRoutes(routes)
  // 遍历routes，和所有children路由做比较，发现相同的记为重复出现，应被剔除
  return routes.filter((route) => {
    return !childrenRoutes.find((item) => {
      return item.path === route.path
    })
  })
}

// 根据处理后的routes做数据处理，剔除掉不符合meta属性的路由，并重新组合成适合菜单渲染的路由结构
export const generateMenus = (routes, basePath = '') => {
  const result = []
  routes.forEach((item) => {
    // 不存在children，不存在meta，直接返回
    if (isNull(item.children) && isNull(item.meta)) return
    // 存在children，不存在meta，将children送进迭代，看children的路由是否符合条件，符合的push进result数组
    if (!isNull(item.children) && isNull(item.meta)) {
      result.push(...generateMenus(item.children))
      return
    }
    // 存在children且存在meta || 不存在children，存在meta
    // 最终路由是供跳转的
    const routePath = path.resolve(basePath, item.path)
    // 看当前路由是否已存在于result数组，存在则跳过处理
    let route = result.find((item) => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      // 不存在children，存在meta的情况
      if (route.meta.title && route.meta.icon) {
        result.push(route)
      }
    }
    // 存在children存在meta
    if (item.children) {
      // 迭代children，将符合条件的push进route.children中
      route.children.push(...generateMenus(item.children, routePath))
    }
  })
  return result
}
