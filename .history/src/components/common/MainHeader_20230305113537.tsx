import styled from 'styled-components';
import LoginView from './LoginView';
import { IoMailOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
type props = {
  isHomePath: boolean;
};

type styledPropsType = {
  isHomePath: boolean;
};

export default function MainHeader({ isHomePath }: props) {
  const navigate = useNavigate();
  return (
    <Header isHomePath={isHomePath}>
      <Title onClick={() => navigate('/job/전체/1')}>POJE</Title>
      <RightWrapper>
        <Nav isHomePath={isHomePath}>
          <Item isHomePath={isHomePath}>
            <IoMailOutline className='icon' />
          </Item>
        </Nav>
        <LoginView isHomePath={isHomePath} />
      </RightWrapper>
    </Header>
  );
}

const Header = styled.header<styledPropsType>`
  position: ${(props) => (props.isHomePath ? 'fixed' : 'sticky')};
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 4rem;
  border-bottom: 2px solid
    ${(props) =>
      props.isHomePath ? props.theme.borderColor : props.theme.borderColor};
  background: ${(props) =>
    props.isHomePath ? 'rgba(0, 0, 0, 0.1)' : props.theme.bgColor};
  color: ${(props) =>
    props.isHomePath ? props.theme.textAccentColor : props.theme.textColor};

  .icon {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.iconSize};
  }
`;
// color: ${(props) => props.theme.textAccentColor};
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.6rem;
  font-weight: bold;
  cursor: pointer;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav<styledPropsType>`
  display: flex;
  align-items: center;
  margin-right: 0.8rem;
`;

const Item = styled.button<styledPropsType>`
  color: ${(props) =>
    props.isHomePath ? props.theme.textAccentColor : props.theme.textColor};
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;

  &:hover {
    filter: brightness(0.5);
  }
`;
