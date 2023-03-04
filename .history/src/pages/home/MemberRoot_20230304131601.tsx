import Navbar from '@src/components/member/Navbar';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function MemberRoot() {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.bgSemiDarkColor};
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;
