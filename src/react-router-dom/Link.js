import React, { Component } from 'react'
import { RouterContext } from '../react-router'

export default class Link extends Component {
  static contextType = RouterContext

  render() {
    const { to, children } = this.props
    return (
      <RouterContext.Consumer>
        {
          (value) => {
            return <a href={to} onClick={(e) => {
              e.preventDefault()
              value.history.push(to)
            }}>{children}</a>
          }
        }
      </RouterContext.Consumer>
    )
  }
}
