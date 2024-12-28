import React from 'react'
import { Route, Redirect } from '../react-router-dom'

export default function Protected(props) {
  const { component: RouteComponent, path } = props

  return <Route path={path} render ={(routeProps) => (
    localStorage.getItem('isLogin') 
    ? <RouteComponent {...routeProps} /> 
    : <Redirect to={{ pathname: '/login', state: { from: path} }} />
  )} />
}
