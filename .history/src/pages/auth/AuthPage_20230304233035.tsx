import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function AuthPage() {
  return (
    <Container>
      <Outlet />
      <PasswordContainer>
        <PwFindForm></PwFindForm>
      </PasswordContainer>
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

const PasswordContainer = styled.div`
  position: fixed;
  z-index: 10000;
  inset: 0 0 0 0;
  background: ${({ theme }) => theme.modalBackgroundColor};
`;

const PwFindForm = styled.form`
  width: 50%;
  aspect-ratio: 2/3;
  background: black;
`;
