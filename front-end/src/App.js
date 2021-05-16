import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./views/homepage/Home'));
// const About = lazy(() => import('./routes/About'));
const Content = lazy(() => import('./views/contentPage/Content'));
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/about" component={About}/> */}
        <Route exact path="/content" component={Content}/> 
      </Switch>
    </Suspense>
  </Router>
);

export default App;
