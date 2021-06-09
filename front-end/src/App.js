import './App.css';

<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import ContentArticle from './views/contentPage/ContentArticle';
import AddArticle from './views/AddArticle/AddArticle'
const Home = lazy(() => import('./views/homepage/Home'));
// const About = lazy(() => import('./routes/About'));
const Content = lazy(() => import('./views/contentPage/ContentArticle'));
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/about" component={About}/> */}
        <Route exact path="/content" component={ContentArticle}/> 
        <Route exact path="/Add" component={AddArticle}/>
      </Switch>
    </Suspense>
  </Router>
);
=======
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
>>>>>>> origin/main

export default App;
