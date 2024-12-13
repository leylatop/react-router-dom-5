import React, { Component } from 'react'

export default class User extends Component {
  render() {
    console.log(this.props);
    
    return (
      <div>User</div>
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
