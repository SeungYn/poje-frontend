import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/home/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);
