import React from 'react'
import ReactDOM from 'react-dom'

import { Profile } from './components/Profile'
import { UserList } from './components/UserList'
import { CountryList } from './components/CountryList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div>
        <h1>React Template</h1>
        <ul>
          <li><a href='/profile'>Profile</a></li>
          <li><a href='/users'>Users</a></li>
          <li><a href='/countries'>Countries</a></li>
        </ul>
        <hr />

        <Switch>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
          <Route path='/countries'>
            <CountryList />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
