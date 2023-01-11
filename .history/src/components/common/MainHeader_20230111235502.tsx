import styled from 'styled-components';
import LoginView from './LoginView';

type props = {
  path: string;
};
export default function MainHeader({ path }: props) {
  return (
    <Header path={path}>
      <Title>POJE</Title>
      <RightWrapper>
        <Nav>
          <div>들러보기</div>
          <div>작성하기</div>
          <div>쪽지함</div>
        </Nav>
        <LoginView />
      </RightWrapper>
    </Header>
  );
}

const Header = styled.header<{ path: string }>`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 4rem;
  border-bottom: 2px solid
    ${(props) =>
      props.path === '/' ? props.theme.borderColor : props.theme.borderColor};
  background: ${(props) =>
    props.path === '/' ? 'rgba(0, 0, 0, 0.1)' : props.theme.mainColor};
`;

const Title = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.textAccentColor};
`;

const RightWrapper = styled.div`
  color: ${(props) => props.theme.textAccentColor};
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  font-size: 1.3rem;
`;
