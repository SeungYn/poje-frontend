import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import AppRouter from './router';
import { GlobalStyle } from './styledComponents/styledComponents';
import { mainTheme } from './styledComponents/theme';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@src/react-query/queryClient';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(process.env.REACT_APP_TEST2, 'env');
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={mainTheme}>
      <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <AppRouter />
          </RecoilRoot>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </CookiesProvider>
    </ThemeProvider>
  </>
);
