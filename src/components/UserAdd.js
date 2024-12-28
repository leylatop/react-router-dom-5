import React, { Component } from 'react'
import User from '../utils/user'
import { Prompt } from '../react-router-dom'

export default class UserAdd extends Component {
  constructor(props) {
    super(props)
    this.nameRef = React.createRef()
  }

  state = {
    isBlocking: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      isBlocking: false
    }, () => {
      const name = this.nameRef.current.value
      User.add({ id: Date.now(), name })
      this.props.history.push('/user/list')
    })
  }

  render() {
    return (
      <>
        <Prompt 
          when={this.state.isBlocking}
          message={
            (location) => `请问你是否要离开当前页面，跳转到${location.pathname}吗？`
          }
        />
        <form onSubmit={this.handleSubmit}>
          <input ref={this.nameRef} type="text" placeholder="请输入用户名" onChange={(event) => {this.setState({ isBlocking: event.target.value.length > 0 })}}/>
          <button type="submit">添加</button>
        </form>
      </>
    )
  }
}
