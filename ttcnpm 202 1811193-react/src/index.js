import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Signup from './views/signup'
import Home from './views/home'
import Login from './views/login'
import './style.module.css'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Signup} path="/signup" />
        <Route exact component={Home} path="/" />
        <Route exact component={Login} path="/login" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
