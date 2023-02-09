import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from './router';
import { GlobalStyle } from './styledComponents/styledComponents';
import { mainTheme } from './styledComponents/theme';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@src/react-query/queryClient';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RouterProvider router={router}></RouterProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
