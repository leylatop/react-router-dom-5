import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    const { history } = this.props
    return (
      <div>
        <p>Home</p>
        <button onClick={() => {history.push('/user')}}>跳转到user</button>
      </div>
    )
  }
}
