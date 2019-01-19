import React from 'react';
import { Router, Route, Switch } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Home';
import About from './About';
import Navigation from './Navigation';
import AboutItem from './AboutItem/AboutItem';

const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Switch>

      <Route path='/about/:item' component={AboutItem} />
      <Navigation />
    </div>
  </Router>
);