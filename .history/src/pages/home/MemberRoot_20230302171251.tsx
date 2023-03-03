import { styled } from '@tanstack/react-query-devtools/build/lib/utils';
import { Outlet } from 'react-router-dom';

export default function MemberRoot() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.section``;
