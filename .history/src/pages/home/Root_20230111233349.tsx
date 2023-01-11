import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from '../../components/common/MainHeader';

export default function Root() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <MainHeader path={location.path} />
      <Outlet />
    </>
  );
}
