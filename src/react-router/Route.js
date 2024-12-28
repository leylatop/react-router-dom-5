import React from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';

class Route extends React.Component {
  static contextType = RouterContext
  render() {
    const { history, location } = this.context
    const {component: RouteComponent, render, computedMatch, children } = this.props
    const match = computedMatch ? computedMatch : matchPath(location.pathname, this.props)
    let element = null
    const routeProps = { history, location }
    if(match) {
      routeProps.match = match
      if(RouteComponent) {
        element = <RouteComponent {...routeProps}/> 
      } else if(render) {
        element = render(routeProps)
      } else if(children){
        if(typeof children === 'function') {
          element = children(routeProps)
        } else {
          element = children
        }
      } else {
        element = null
      }
    } else {
      if(children) {
        if(typeof children === 'function') {
          element = children(routeProps)
        } else {
          element = children
        }
      } else {
        element = null
      }
    }
    return element
  }
}

export default Route


/**
 * path
 * 渲染组件有三种方式：
 * 1. component：指定渲染的组件
 * 2. render：render可以指定一个渲染的方法，可以根据条件渲染不同的组件
 * 3. children: component和render属性是只有当path匹配成功之后才渲染。而children与component和render不同，不管匹配与否都会渲染children；不同的是传递给children的参数中是否包含match
 * 其中，component优先级最高、render、children次之
 */
