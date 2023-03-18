import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CommonLoading from './components/common/CommonLoading';
import CommonModal from './components/common/CommonModal';
import ConfirmModal from './components/common/ConfirmModal';
import ErrorBoundary from './components/errorComponent/ErrorBoundary';
import LoadingSpiner from './components/portfolio/common/LoadingSpiner';
import useModal from './hooks/common/useModal';
import AuthRouterProtect from './pages/AuthRouterProtect';
import MainPage from './pages/home/MainPage';
import Root from './pages/home/Root';
import NotFound from './pages/notFound/NotFound';
import RouterProtect from './pages/RouterProtect';

const JobRoot = lazy(() => import('./pages/home/JobRoot'));
const JobSearchPage = lazy(() => import('./pages/home/JobSearchPage'));
const JobPages = lazy(() => import('./pages/home/JobPages'));
const JobLikePage = lazy(() => import('./pages/home/JobLikePage'));
const MemberRoot = lazy(() => import('./pages/home/MemberRoot'));
const MyInfoPage = lazy(() => import('./pages/home/MyInfoPage'));
const MemberModifyPage = lazy(() => import('./pages/home/MemberModifyPage'));
const PasswordModifyPage = lazy(
  () => import('./pages/home/PasswordModifyPage')
);
const PortfolioRootPage = lazy(
  () => import('./pages/portfolio/PortfolioRootPage')
);
const PortfolioMain = lazy(() => import('./pages/portfolio/PortfolioMain'));
const AuthPage = lazy(() => import('./pages/auth/AuthPage'));
const Login = lazy(() => import('./components/auth/Login'));
const SignUp = lazy(() => import('./components/auth/SignUp'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <MainPage /> },
      {
        path: 'job',
        element: (
          <Suspense fallback={<LoadingSpiner text='로딩중' />}>
            <JobRoot />
          </Suspense>
        ),
        children: [
          {
            path: ':type/search/:keyword/:page',
            element: (
              <RouterProtect>
                <JobSearchPage />
              </RouterProtect>
            ),
          },
          {
            path: ':type/:page',
            element: (
              <RouterProtect>
                <JobPages />
              </RouterProtect>
            ),
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
            <Suspense fallback={<LoadingSpiner text='로딩중' />}>
              <MemberRoot />
            </Suspense>
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
    element: (
      <RouterProtect>
        <Suspense fallback={<LoadingSpiner text='로딩중' />}>
          <PortfolioRootPage />
        </Suspense>
      </RouterProtect>
    ),
    children: [{ path: ':portfolioId', element: <PortfolioMain /> }],
    errorElement: <NotFound />,
  },
  {
    path: '/auth',
    element: (
      <AuthRouterProtect>
        <Suspense fallback={<LoadingSpiner text='로딩중' />}>
          <AuthPage />
        </Suspense>
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
