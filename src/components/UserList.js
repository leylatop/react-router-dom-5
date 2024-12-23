import React, { Component } from 'react'
import User from '../utils/user'
import { Link } from '../react-router-dom'

export default class UserList extends Component {
  render() {
    return (
      <div>
        <ul>
          {User.list().map(user => (
            <li key={user.id}>
              <Link to={`/user/detail/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
