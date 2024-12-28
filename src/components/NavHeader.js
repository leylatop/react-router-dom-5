import React, { Component } from 'react'
import { withRouter } from '../react-router-dom'

class NavHeader extends Component {
  // 只有通过Route渲染出来的组件才有history
  // 如果没有被包在Route中，可以通过withRoute高阶组件包裹一下组件
  render() {
    return (
      <div onClick={() => {this.props.history.push('/')}}>
        {this.props.title}
      </div>
    )
  }
}

export default withRouter(NavHeader)


