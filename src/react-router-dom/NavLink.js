import React from 'react'
import { Route } from '../react-router'
import Link from './Link'

// 访问谁，或者点击谁，哪个link就被激活，核心原理是地址栏中的location.pathname 和to一致
export default function NavLink(props) {
  const { to, exact, className, activeClassName, style, activeStyle, children } = props
  return (
    <Route path={to} exact={exact}>
      {
        // 在Route中，无论是否匹配路由，都会渲染这个方法；不同的如果匹配成功match中会有值，以是否存在match来赋给Link样式
        (routeProps) => {
          const { match } = routeProps
          let linkProps = {
            className: match ? `${className} ${activeClassName}` : className,
            style: match ? {...style, ...activeStyle} : style,
            to,
            children
          }
          return <Link {...linkProps}/>
        }
      }
    </Route>
  )
}
