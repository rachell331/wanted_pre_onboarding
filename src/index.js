import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Router from './Router';

ReactDOM.render(
  <ThemeProvider>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,
  document.getElementById('root')
);
