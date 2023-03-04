import NoteContainer from '@src/components/home/note/NoteContainer';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from '../../components/common/MainHeader';

export default function Root() {
  const location = useLocation();
  const isHomePath = location.pathname === '/' ? true : false;
  return (
    <DefaultBackground isHomePath={isHomePath}>
      <MainHeader isHomePath={isHomePath} />

      <Outlet />
    </DefaultBackground>
  );
}

const DefaultBackground = styled.div<{ isHomePath: boolean }>`
  position: relative;
  background-color: ${(props) => props.theme.bgSemiDarkColor};
  /* overflow: ${({ isHomePath }) => (isHomePath ? 'auto' : 'hidden')}; */
  height: 100%;
  display: flex;
  flex-direction: column;
`;
