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
        <MenuItem>내 정보</MenuItem>
        <MenuItem>포트폴리오</MenuItem>
        <MenuItem>로그아웃</MenuItem>
        <MenuItem>로그인</MenuItem>
        <MenuItem>회원가입</MenuItem>
      </MenuList>
    </Wrapper>
  );
}
const MenuList = styled.ul``;

const MenuItem = styled.li``;

const Wrapper = styled.div`
  position: relative;
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  .open {
    transform: rotate(180deg);
  }

  ${MenuList} {
    position: absolute;
    background: black;
    width: 200px;
    top: 20px;
    right: 0;
  }
`;
