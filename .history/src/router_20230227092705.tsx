import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import CommonModal from './components/common/CommonModal';
import ConfirmModal from './components/common/ConfirmModal';
import ErrorBoundary from './components/errorComponent/ErrorBoundary';
import useModal from './hooks/common/useModal';
import AuthPage from './pages/auth/AuthPage';
import AuthRouterProtect from './pages/AuthRouterProtect';
import JobPages from './pages/home/JobPages';
import JobSearchPage from './pages/home/JobSearchPage';
import MainPage from './pages/home/MainPage';
import Root from './pages/home/Root';
import NotFound from './pages/notFound/NotFound';
import PortfolioMain from './pages/portfolio/PortfolioMain';
import PortfolioMakePage from './pages/portfolio/PortfolioMakePage';
import PortfolioRootPage from './pages/portfolio/PortfolioRootPage';
import RouterProtect from './pages/RouterProtect';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <MainPage /> },
      {
        path: 'job',
        element: <><Outlet /></>,
        children: [
          { index:true, element: <Navigate to={'/job/전체'}></Navigate> },
          {
            path: 'job/search/:keyword',
            element: (
              <RouterProtect>
                <JobSearchPage />
              </RouterProtect>
            ),
          },
          {
            path: 'job/:type',
            element: (
              <RouterProtect>
                <JobPages />
              </RouterProtect>
            ),
          },
        ]
      },
      
    ],
    errorElement: <NotFound />,
  },
  {
    path: '/portfolio',
    element: (
      <RouterProtect>
        <PortfolioRootPage />
      </RouterProtect>
    ),
    children: [{ path: ':portfolioId', element: <PortfolioMain /> }],
    errorElement: <NotFound />,
  },
  {
    path: '/portfolio/make',
    element: <PortfolioMakePage />,
    errorElement: <NotFound />,
  },
  {
    path: '/auth',
    element: (
      <AuthRouterProtect>
        <AuthPage />
      </AuthRouterProtect>
    ),
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
    ],
    errorElement: <NotFound />,
  },
  {
    path: '/testjoin',
    element: (
      <button
        onClick={() => {
          fetch('http://localhost:8080/jointest', { method: 'POST' });
          fetch('http://localhost:8080/jobtest', { method: 'POST' });
        }}
      >
        {' '}
        임시생성 아이디{' '}
      </button>
    ),
  },
]);

export default function AppRouter() {
  const { setModal } = useModal();
  const handleError = (error: Error) => {
    setModal(error.message);
  }
  return (
    <ErrorBoundary onError={handleError}>
      <ConfirmModal />
      <CommonModal />
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
