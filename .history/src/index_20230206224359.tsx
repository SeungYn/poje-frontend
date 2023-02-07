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
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

    <GlobalStyle />
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  
);
