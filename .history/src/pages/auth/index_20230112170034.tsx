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

const Container = styled.section`
  background: ${(props) => props.theme.mainColor};
`;
