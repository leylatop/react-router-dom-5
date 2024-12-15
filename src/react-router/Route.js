import React from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';

class Route extends React.Component {
  static contextType = RouterContext
  render() {
    const { history, location } = this.context
    const {component: RouteComponent } = this.props
    const match = matchPath(location.pathname, this.props)
    let element = null
    const routeProps = { history, location }
    if(match) {
      routeProps.match = match
      element = <RouteComponent {...routeProps}/> 
    }
    return element
  }
}

export default Route