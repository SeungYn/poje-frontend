import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function AuthPage() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.main`
  background: ${(props) => props.theme.mainColorSemiDark};
  position: relative;
  height: 100vh;
  padding: 2rem;

  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;
