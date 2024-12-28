import React from 'react'
import RouterContext from './RouterContext'
import matchPath from './matchPath'

function useHistory() {
  const contextRouter = React.useContext(RouterContext)
  return contextRouter.history
}

function useLocation() {
  const contextRouter = React.useContext(RouterContext)
  return contextRouter.location
}

function useParams() {
  const contextRouter = React.useContext(RouterContext)

  return contextRouter.match?.params || {}
}

function useRouteMatch(path) {
  // 1. 获取当前的真实路径
  const location = useLocation()
  const match = React.useContext(RouterContext).match
  
  let options = {}
  if(typeof path === 'string') {
    options.path = path
  } else if(typeof path === 'object') {
    options = {...path}
  }
  return path ? matchPath(location.pathname, options) : match
}

export {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
}