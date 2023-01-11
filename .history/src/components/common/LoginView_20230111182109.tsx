import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';
export default function LoginView() {
  const [user, setUser] = useState(false);

  return (
    <div>
      <CgProfile />
    </div>
  );
}

const Wrapper = styled.div``;
