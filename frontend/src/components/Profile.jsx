import React from 'react'

export class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = { user: {} }
  }

  componentDidMount () {
    fetch('/api/profile')
      .then(res => res.json())
      .then((result) => {
        this.setState({ user: result })
      })
  }

  render () {
    const user = this.state.user

    return (
      <div>
        <h1>Profile</h1>
        <p><b>Name</b>: {user.name}</p>
        <p><b>Email</b>: {user.email}</p>
        <p><b>Country</b>: {user.country}</p>
      </div>
    )
  }
}
