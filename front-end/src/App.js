import './App.css';

import React, { lazy } from 'react';
import 'antd/dist/antd.css';
import TheLayout from './TheLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPage from './views/admin/AdminPage';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const App = () => {
  // console.log(this.props)
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} /> */}
          {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} /> */}
          {/* <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} /> */}
          {/* <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
          <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
          {/* <Route path='/admin' name='Admin Page' render={props => <AdminPage {...props} />} /> */}
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
