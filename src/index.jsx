import React from 'react'
import ReactDOM from 'react-dom'

import { Profile } from './components/Profile'
import { UserList } from './components/UserList'
import { CountryList } from './components/CountryList'

function App () {
  if (window.location.href.indexOf('/profile') >= 0) {
    return <Profile />
  } else if (window.location.href.indexOf('/users') >= 0) {
    return <UserList />
  } else if (window.location.href.indexOf('/countries') >= 0) {
    return <CountryList />
  } else {
    return (
      <ul>
        <h1>React Template</h1>
        <li><a href='/profile'>Profile</a></li>
        <li><a href='/users'>Users</a></li>
        <li><a href='/countries'>Countries</a></li>
      </ul>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
