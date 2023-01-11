import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';
export default function LoginView() {
  const [user, setUser] = useState(false);

  return (
    <Wrapper>
      <CgProfile />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
