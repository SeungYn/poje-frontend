import { testQueryConfig } from '@src/react-query/queryClient';
import { mainTheme } from '@src/styledComponents/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { MemoryRouter, MemoryRouterProps, Routes } from 'react-router-dom';
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

export function addMockFunctionType(fn: any) {
  return fn as unknown as jest.MockedFunction<any>;
}

export function makeWrapper({ children }: { children: React.ReactNode }) {
  return withAllContext(children);
}

export function makeWrapperWithSuspense({
  children,
}: {
  children: React.ReactNode;
}) {
  return withAllContext(<Suspense fallback={null}>{children}</Suspense>);
}
