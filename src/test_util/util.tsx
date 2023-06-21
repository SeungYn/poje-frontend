import { testQueryConfig } from '@src/react-query/queryClient';
import { mainTheme } from '@src/styledComponents/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  RouteProps,
  MemoryRouter,
  MemoryRouterProps,
  Routes,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

export function withMemoryRouter(
  routes: React.ReactNode,
  routerProps: MemoryRouterProps
) {
  return (
    <MemoryRouter {...routerProps}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}

export function withAllContext(children: React.ReactNode) {
  const client = new QueryClient(testQueryConfig);
  return (
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={client}>
        <RecoilRoot>{children}</RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
