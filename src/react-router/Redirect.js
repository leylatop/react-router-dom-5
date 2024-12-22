import React from 'react'
import RouterContext from './RouterContext'
import Lifecycle from './Lifecycle'

export default function Redirect({ to }) {
  return (
    <RouterContext.Consumer>
      {
        (value) => {
          // value 是 { history, location }
          // value.history.push(to)
          return <Lifecycle onMount={() => value.history.push(to)} />
        }
      }
    </RouterContext.Consumer>
  )
}
