import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from '../../components/common/MainHeader';

export default function Root() {
  const location = useLocation();
  const isHomePath = location.pathname === '/' ? true : false;
  return (
    <DefaultBackground>
      <MainHeader isHomePath={isHomePath} />
      <Outlet />
    </DefaultBackground>
  );
}

const DefaultBackground = styled.div`
  overflow: hidden;
  
`
