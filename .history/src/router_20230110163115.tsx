import { createBrowserRouter } from 'react-router-dom';
import JobPages from './pages/home/JobPages';
import MainPage from './pages/home/MainPage';
import Root from './pages/home/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <MainPage /> },
      { path: 'job', element: <JobPages /> },
    ],
  },
]);
