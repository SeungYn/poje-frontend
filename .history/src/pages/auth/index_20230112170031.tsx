import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function AuthRoot() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

const Container = styled.section`
  background: ${(props) => props.theme.mainColor};
`;
