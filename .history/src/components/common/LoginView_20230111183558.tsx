import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineBarsArrowDown } from 'react-icons/hi2';
import styled from 'styled-components';

export default function LoginView() {
  const [user, setUser] = useState(false);
  const [test, setTest] = useState(false);
  return (
    <Wrapper onClick={() => setTest((v) => !v)}>
      <CgProfile />
      <HiOutlineBarsArrowDown />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${(props) => props.theme.textColor};

  .open {
    transform: rotate(180deg);
  }

  .close {
    transform: rotate(0deg);
  }
`;
