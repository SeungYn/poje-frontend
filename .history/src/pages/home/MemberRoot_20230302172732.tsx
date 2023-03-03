import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function MemberRoot() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.section`
  background-color: ${(props) => props.theme.bgColor};
  height: 100%;
  width: 100%;
  max-width: 1600px;
`;
