import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Signup from './views/signup'
import Login from './views/login'
import OTP from './views/o-t-p'
import Home from './views/home'
import './style.module.css'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Signup} path="/signup" />
        <Route exact component={Login} path="/login" />
        <Route exact component={OTP} path="/o-t-p" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
