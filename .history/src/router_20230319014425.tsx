import { lazy, Suspense } from 'react';
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
//import JobLikePage from './pages/home/JobLikePage';
//import JobPages from './pages/home/JobPages';
//import JobRoot from './pages/home/JobRoot';
//import JobSearchPage from './pages/home/JobSearchPage';
import MainPage from './pages/home/MainPage';
//import MemberModifyPage from './pages/home/MemberModifyPage';
//import MemberRoot from './pages/home/MemberRoot';
//import MyInfoPage from './pages/home/MyInfoPage';
//import PasswordModifyPage from './pages/home/PasswordModifyPage';
import Root from './pages/home/Root';
import NotFound from './pages/notFound/NotFound';
//import PortfolioMain from './pages/portfolio/PortfolioMain';
//import PortfolioRootPage from './pages/portfolio/PortfolioRootPage';
import RouterProtect from './pages/RouterProtect';

// const Root = lazy(() => import('./pages/home/Root'));
// const MainPage = lazy(() => import('./pages/home/MainPage'));
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
// const PortfolioMakePage = lazy(
//   () => import('./pages/portfolio/PortfolioMakePage')
// );
// const AuthPage = lazy(() => import('./pages/auth/AuthPage'));
// const Login = lazy(() => import('./components/auth/Login'));
// const SignUp = lazy(() => import('./components/auth/SignUp'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <MainPage /> },
      {
        path: 'job',
        element: (
          <Suspense fallback={<div>로딩</div>}>
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
            <Suspense fallback={<div>로딩</div>}>
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
        <Suspense>
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
