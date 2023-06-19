import {
  RouteProps,
  MemoryRouter,
  MemoryRouterProps,
  Routes,
} from 'react-router-dom';

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
