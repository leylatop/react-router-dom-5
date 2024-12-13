import React, { Component } from 'react'

export default class User extends Component {
  render() {
    const  { history } = this.props
    return (
      <div>
        <p>User</p>
        <button onClick={() => history.goBack() }>返回</button>
      </div>
    )
  }
}

/**
{
  "history": {
    "length": 8,
    "action": "POP",
    "location": {
      "pathname": "/user",
      "search": "",
      "hash": ""
    }
  },
  "location": {
    "pathname": "/user",
    "search": "",
    "hash": ""
  },
  "match": {
    "path": "/user",
    "url": "/user",
    "isExact": true,
    "params": {}
  }
}
 */
