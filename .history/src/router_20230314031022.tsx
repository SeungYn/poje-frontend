import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import CommonLoading from './components/common/CommonLoading';
import CommonModal from './components/common/CommonModal';
import ConfirmModal from './components/common/ConfirmModal';
import ErrorBoundary from './components/errorComponent/ErrorBoundary';
import useModal from './hooks/common/useModal';
import AuthPage from './pages/auth/AuthPage';
import AuthRouterProtect from './pages/AuthRouterProtect';
import JobLikePage from './pages/home/JobLikePage';
import JobPages from './pages/home/JobPages';
import JobRoot from './pages/home/JobRoot';
import JobSearchPage from './pages/home/JobSearchPage';
import MainPage from './pages/home/MainPage';
import MemberModifyPage from './pages/home/MemberModifyPage';
import MemberRoot from './pages/home/MemberRoot';
import MyInfoPage from './pages/home/MyInfoPage';
import PasswordModifyPage from './pages/home/PasswordModifyPage';
import Root from './pages/home/Root';
import NotFound from './pages/notFound/NotFound';
import PortfolioMain from './pages/portfolio/PortfolioMain';
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
        element: <JobRoot />,
        children: [
          {
            path: ':type/search/:keyword/:page',
            element: <JobSearchPage />,
          },
          {
            path: ':type/:page',
            element: <JobPages />,
          },
          {
            path: 'like/:page',
            element: (
              <RouterProtect>
                <JobLikePage />
              </RouterProtect>
            ),
          },
        ],
      },
      {
        path: 'member',
        element: (
          <RouterProtect>
            <MemberRoot />
          </RouterProtect>
        ),
        children: [
          {
            path: 'myinfo',
            element: <MyInfoPage />,
          },
          {
            path: 'modify',
            element: <MemberModifyPage />,
          },
          {
            path: 'password',
            element: <PasswordModifyPage />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: '/portfolio',
    element: <PortfolioRootPage />,
    children: [{ path: ':portfolioId', element: <PortfolioMain /> }],
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
]);

export default function AppRouter() {
  const { setModal } = useModal();
  const handleError = (error: Error) => {
    setModal(error.message);
  };
  return (
    <ErrorBoundary onError={handleError}>
      <CommonLoading />
      <ConfirmModal />
      <CommonModal />
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
