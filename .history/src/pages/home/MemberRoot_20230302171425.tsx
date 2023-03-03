import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function MemberRoot() {
  return (
    <Container>
      <Outlet />
      sdf sadsa
    </Container>
  );
}

const Container = styled.section`
  height: 100%;
  width: 100%;
  background: black;
`;
