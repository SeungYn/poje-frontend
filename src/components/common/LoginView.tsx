import useAuth from '@src/hooks/auth/useAuth';
import useUser from '@src/hooks/auth/useUser';
import useMyInfo from '@src/hooks/member/useMyInfo';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useDropDownHelper from '../../hooks/useDropDownHelper';

type props = {
  isHomePath: boolean;
};

type styledPropsType = {
  isHomePath: boolean;
};

export default function LoginView({ isHomePath }: props) {
  const navigate = useNavigate();
  const { user } = useUser();
  const { logOut } = useAuth();
  const [loginIsOpen, loginRef, loginToggleHander] =
    useDropDownHelper<HTMLDivElement>();
  const { userInfo } = useMyInfo();

  if (!user)
    return (
      <LoginBtn isHomePath={isHomePath} onClick={() => navigate('/auth/login')}>
        로그인
      </LoginBtn>
    );

  return (
    <Wrapper ref={loginRef} onClick={loginToggleHander} isHomePath={isHomePath}>
      <ProfileImg src={userInfo?.profileImg} alt={userInfo?.nickName} />
      <MdOutlineKeyboardArrowDown
        title='arrow-icon'
        className={`icon ${loginIsOpen ? 'open' : ''}`}
        style={{ transition: 'transform 0.2s linear' }}
      />
      <MenuList isOpend={loginIsOpen}>
        <MenuItem onClick={() => navigate('/member/myinfo')}>내 정보</MenuItem>
        <MenuItem>포트폴리오</MenuItem>
        <MenuItem onClick={() => logOut()}>로그아웃</MenuItem>
      </MenuList>
    </Wrapper>
  );
}
const MenuList = styled.ul<{ isOpend: boolean }>`
  cursor: pointer;
  color: ${(props) => props.theme.textAccentColor};
  transition: height 0.2s linear;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: ${(props) => (props.isOpend ? '6rem' : '2rem')};
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
    background-color: ${(props) => props.theme.bgAccentColor};
  }
`;

const Wrapper = styled.div<styledPropsType>`
  cursor: pointer;
  position: relative;
  color: ${(props) => props.theme.textAccentColor};
  display: flex;
  align-items: center;

  .open {
    transform: rotate(180deg);
  }

  .icon {
    color: ${({ isHomePath, theme }) =>
      isHomePath ? theme.textAccentColor : theme.textColor};
  }
`;

const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const LoginBtn = styled.button<styledPropsType>`
  font-size: 1.2rem;
  color: ${({ isHomePath, theme }) =>
    isHomePath ? theme.textAccentColor : theme.textColor};
  border: 1px solid
    ${({ isHomePath, theme }) =>
      isHomePath ? theme.textAccentColor : theme.textColor};
  padding: 0.4rem 0.8rem;

  border-radius: 1rem;
`;
