import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/home/MainPage';
import Root from './pages/home/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ path: '', element: <MainPage /> }],
  },
]);
