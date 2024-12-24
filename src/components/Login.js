import React, { Component } from 'react'

export default class Login extends Component {
  handleLogin = () => {
    localStorage.setItem('isLogin', true)
    this.props.history.push(this.props.location.state.from || '/')
  }
  render() {
    return (
      <div>
        请登录
        <button onClick={this.handleLogin}>登录</button>
      </div>
    )
  }
}
