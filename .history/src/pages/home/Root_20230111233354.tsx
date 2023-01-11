import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from '../../components/common/MainHeader';

export default function Root() {
  const location = useLocation();

  return (
    <>
      <MainHeader path={location.pathname} />
      <Outlet />
    </>
  );
}
