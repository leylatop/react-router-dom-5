const User= {
  list: () => {
    const userStr = localStorage.getItem('users')
    return userStr ? JSON.parse(userStr) : []
  },
  add: (user) => {
    const users = User.list()
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
  },
  get: (id) => {
    id = parseInt(id)
    const users = User.list()
    return users.find(user => user.id === id)
  }
}

export default User