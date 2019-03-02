import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar/';

import theme from './theme';
import './styles/main.sass';

export default () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <NavBar />
      <SideBar />
    </div>
  </MuiThemeProvider>
);