import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineArrowDown } from 'react-icons/hi';
import styled from 'styled-components';
export default function LoginView() {
  const [user, setUser] = useState(false);

  return (
    <Wrapper>
      <CgProfile style={{ fontSize: '3rem' }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${(props) => props.theme.textColor};
`;
