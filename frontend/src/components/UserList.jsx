import React from 'react'

export class UserList extends React.Component {
  constructor (props) {
    super(props)
    this.state = { users: [] }
  }

  componentDidMount () {
    fetch('/api/users')
      .then(res => res.json())
      .then((result) => {
        this.setState({ users: result })
      })
  }

  render () {
    const users = this.state.users

    return (
      <div>
        <h1>User List</h1>
        <ul>{
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })
        }
        </ul>
      </div>
    )
  }
}
