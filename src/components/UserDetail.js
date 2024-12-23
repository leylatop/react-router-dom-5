import React, { Component } from 'react'
import User from '../utils/user'

export default class UserDetail extends Component {
  state = {
    user: null
  }
  componentDidMount() {
    let user = this.props.location.state
    if(!user) {
      const id = this.props.match.params.id
      user = User.get(id)
    }
    if(user) {
      this.setState({ user })
    }
  }
  render() {
    const { user } = this.state
    if(!user) {
      return null
    }
    return (
      <div>
        <p>用户详情</p>
        <p>用户名：{user.name}</p>
        <p>用户ID：{user.id}</p>
      </div>
    )
  }
}
