import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar/';

import theme from './theme';
import './styles/main.sass';
import Provider from 'react-redux/es/components/Provider';
import { store } from './store';

export default () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <div>
        <NavBar />
        <SideBar />
      </div>
    </Provider>
  </MuiThemeProvider>
);