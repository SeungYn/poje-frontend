import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from './router';
import { GlobalStyle } from './styledComponents/styledComponents';
import { mainTheme } from './styledComponents/theme';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

    <GlobalStyle />
    <ThemeProvider theme={mainTheme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>

);
