import React from 'react'
import { Router } from '../react-router'
import { createBrowserHistory } from 'history'

class BrowserRouter extends React.Component {
  constructor(props) {
    super(props)
    this.history = createBrowserHistory()
  }

  render() {
    return <Router history={this.history}>
      {this.props.children}
    </Router>
  }
}

export default BrowserRouter