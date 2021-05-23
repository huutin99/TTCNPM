import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import ContentArticle from './views/contentPage/ContentArticle';
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
      </Switch>
    </Suspense>
  </Router>
);

export default App;
