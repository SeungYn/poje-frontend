import styled from 'styled-components';
import LoginView from './LoginView';
import { IoMailOutline } from 'react-icons/io';
type props = {
  path: string;
};

type styledPropsType = {
  path: string;
};

export default function MainHeader({ path }: props) {
  return (
    <Header path={path}>
      <Title>POJE</Title>
      <RightWrapper>
        <Nav path={path}>
          <Item path={path}>쪽지함</Item>
        </Nav>
        <LoginView />
      </RightWrapper>
    </Header>
  );
}

const Header = styled.header<styledPropsType>`
  position: ${(props) => (props.path === '/' ? 'fixed' : 'sticky')};
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 4rem;
  border-bottom: 2px solid
    ${(props) =>
      props.path === '/' ? props.theme.borderColor : props.theme.borderColor};
  background: ${(props) =>
    props.path === '/' ? 'rgba(0, 0, 0, 0.1)' : props.theme.bgColor};
  color: ${(props) =>
    props.path === '/' ? props.theme.textAccentColor : props.theme.textColor};
`;
// color: ${(props) => props.theme.textAccentColor};
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.6rem;
  font-weight: bold;
`;

const RightWrapper = styled.div`
  display: flex;
`;

const Nav = styled.nav<styledPropsType>`
  display: flex;
  align-items: center;
`;

const Item = styled.button<styledPropsType>`
  color: ${(props) =>
    props.path === '/' ? props.theme.textAccentColor : props.theme.textColor};
  border: 1px solid ${(props) => props.theme.textAccentColor};
  padding: 0.4rem 0.8rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  margin-right: 0.8rem;

  &:hover {
    filter: brightness(0.5);
  }
`;
