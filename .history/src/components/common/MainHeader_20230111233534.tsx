import styled from 'styled-components';
import LoginView from './LoginView';

type props = {
  path: string;
};
export default function MainHeader({ path }: props) {
  return (
    <Header path={path}>
      <Title>POJE</Title>
      <Div>
        <Nav>
          <div>들러보기</div>
          <div>작성하기</div>
          <div>쪽지함</div>
        </Nav>
        <LoginView />
      </Div>
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
  padding: 0.8rem 2rem;
  /* border-bottom: 2px solid ${(props) => props.theme.borderColor}; */
  /* background: rgba(0, 0, 0, 0.1); */
  background: ${(props) =>
    props.path === '/' ? 'rgba(0, 0, 0, 0.1)' : '#f2deba'};
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Div = styled.div`
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
