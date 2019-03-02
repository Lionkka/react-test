import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar/';

import theme from './theme';
import './styles/main.sass';
import Provider from 'react-redux/es/components/Provider';
import { store } from './store';

import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Router, Switch } from 'react-router';
import Shop from './containers/Shop';

const history = createBrowserHistory();

export default () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <>
          <NavBar/>
          <SideBar/>

          <Switch>
            <Route path='/' component={Shop}/>
          </Switch>
        </>
      </Router>
    </Provider>
  </MuiThemeProvider>
);