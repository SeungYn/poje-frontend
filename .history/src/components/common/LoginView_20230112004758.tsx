import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styled from 'styled-components';

export default function LoginView() {
  const [user, setUser] = useState(true);
  const [test, setTest] = useState(false);

  if (!user) return <LoginBtn>Login</LoginBtn>;

  return (
    <Wrapper onClick={() => setTest((v) => !v)}>
      <CgProfile size={'2rem'} />
      <MdOutlineKeyboardArrowDown
        className={test ? 'open' : ''}
        style={{ transition: 'transform 0.2s linear' }}
      />
      <MenuList isOpend={test}>
        <MenuItem>내 정보</MenuItem>
        <MenuItem>포트폴리오</MenuItem>
        <MenuItem>로그아웃</MenuItem>
      </MenuList>
    </Wrapper>
  );
}
const MenuList = styled.ul<{ isOpend: boolean }>`
  cursor: pointer;
  transition: height 0.2s linear;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: ${(props) => (props.isOpend ? '6rem' : '0px')};
  overflow: hidden;
  top: 2.5rem;
  right: 0;
  visibility: ${(props) => (props.isOpend ? 'visible' : 'hidden')};
  background: ${(props) => props.theme.darkBgColor};
`;

const MenuItem = styled.li`
  padding: 0.4rem 0;
  text-align: center;
  width: 100%;
  &:hover {
    filter: brightness(2);
  }
`;

const Wrapper = styled.div`
  position: relative;
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;

  .open {
    transform: rotate(180deg);
  }
`;

const LoginBtn = styled.button`
  font-size: 1.2rem;
  background: ${(props) => props.theme.mainColorSemiDark};
  color: ${(props) => props.theme.textAccentColor};
  padding: 0 0.8rem;
  border-radius: 1rem;
`;
