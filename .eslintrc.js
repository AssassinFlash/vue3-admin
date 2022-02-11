// 导出 eslint 的配置对象
module.exports = {
  // 表示当前目录即为根目录，eslint 规则被限制到该目录下
  root: true,
  // env 表示启用 eslint 检测的环境
  env: {
    // 表示在 node 环境下启用 eslint 检测
    node: true
  },
  // eslint 中基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  // 解析器
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 需要修改的启用规则和各自的错误级别
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 新增一个空格规则，解决eslint和prettier的冲突
    'space-before-function-paren': 'off'
  }
}
