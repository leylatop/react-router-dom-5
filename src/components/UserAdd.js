import React, { Component } from 'react'
import User from '../utils/user'

export default class UserAdd extends Component {
  constructor(props) {
    super(props)
    this.nameRef = React.createRef()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const name = this.nameRef.current.value
    User.add({ id: Date.now(), name })
    this.props.history.push('/user/list')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={this.nameRef} type="text" placeholder="请输入用户名" />
        <button type="submit">添加</button>
      </form>
    )
  }
}
