import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function AuthRoot() {
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
`;

const AuthContainer = styled.section``;
