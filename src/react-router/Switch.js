import React, { Component } from 'react'
import RouterContext from './RouterContext'
import matchPath from './matchPath'

/**
 * Switch 存在的意义是为了不在每个Route内部都进行匹配，节省资源
 */
export default class Switch extends Component {
  static contextType = RouterContext
  render() {
    const { location }= this.context
    const { children } = this.props
    let element = null, match
    React.Children.forEach(children, (route) => {
      // 只匹配一次
      if(!match && React.isValidElement(route )) {
        element = route
        match = matchPath(location.pathname, route.props)
      }
    })
    if(match) return React.cloneElement(element, {computedMatch: match })
    return null
  }
}
