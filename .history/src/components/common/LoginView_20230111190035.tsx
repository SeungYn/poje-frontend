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
      <HiOutlineBarsArrowDown
        className={test ? 'open' : ''}
        style={{ transition: 'transform 1s linear' }}
      />
      <MenuList>
        <MenuItem></MenuItem>
      </MenuList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  .open {
    transform: rotate(180deg);
  }
`;

const MenuList = styled.ul``;

const MenuItem = styled.li``;
