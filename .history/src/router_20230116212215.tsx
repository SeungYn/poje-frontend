import { createBrowserRouter } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import AuthRoot from './pages/auth';
import JobPages from './pages/home/JobPages';
import MainPage from './pages/home/MainPage';
import Root from './pages/home/Root';
import NotFound from './pages/notFound/NotFound';
import PortfolioMain from './pages/portfolio/PortfolioMain';
import PortfolioMakePage from './pages/portfolio/PortfolioMakePage';
import PortfolioRootPage from './pages/portfolio/PortfolioRootPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <MainPage /> },
      // { path: 'job', element: <JobPages /> },
      { path: 'job/:type', element: <JobPages /> },
    ],
    errorElement: <NotFound />,
  },
  {
    path: '/portfolio',
    element: <PortfolioRootPage />,
    children: [{ path: ':id', element: <PortfolioMain /> }],
    errorElement: <NotFound />,
  },
  {
    path: '/portfolio/make',
    element: <PortfolioMakePage />,
    errorElement: <NotFound />,
  },
  {
    path: '/auth',
    element: <AuthRoot />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
    ],
    errorElement: <NotFound />,
  },
]);