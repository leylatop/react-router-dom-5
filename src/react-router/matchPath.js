// import { compile } from "path-to-regexp"
import { pathToRegexp } from "path-to-regexp"

function compilePath(path, options) {
  const keys = []
  const regexp = pathToRegexp(path, keys, options)
  return regexp
}

/**
 * 计算路径是否匹配
 * @param {*} pathname 当前地址栏中的路径
 * @param {*} options 
 * exact 是否精确匹配，是否匹配整个字符串，后面是否还可以跟其他内容，默认false
 * sensitive 大小写是否敏感，默认false不敏感
 * strict 是否允许结尾有一个可选的 / 默认false
 * 
 */
function matchPath(pathname, options = {}) {
  // path 是Route对应的路径
  const { path = '/', exact = false, strict = false, sensitive = false } = options

  const { keys, regexp } = compilePath(path, { end: exact, strict, sensitive })

  // 判断当前地址栏中的路径与Route中的路径是否匹配
  const match = regexp.exec(pathname)
  if(!match) return null
  // url是匹配到的路径，value是路由中的值；
  // 比如/user/:id/:name 匹配 /user/123/zhangsan，此时url为/user，value为123 和 zhangsan
  const [ url, ...value ] = match
  // 判断是否精确匹配
  const isExact = pathname === url
  if(exact && !isExact) return null

  return {
    path,
    url, // Route路径转成的正则表达式匹配的路径部分
    isExact,
    params: keys.reduce((memo, key, index) => {
      // 路径参数key = 路径参数值
      memo[key.name] = value[index]
      return memo
    }, {})
  }
}

export default matchPath