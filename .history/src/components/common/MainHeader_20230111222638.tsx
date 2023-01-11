import styled from 'styled-components';
import LoginView from './LoginView';

export default function MainHeader() {
  return (
    <Header>
      <Div>POJE</Div>
      <Div>
        <Nav>
          <div>포토폴리오 보기</div>
          <div>포토폴리오 작성하기</div>
        </Nav>
        <LoginView />
      </Div>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  height: 4.7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  background: rgba(0, 0, 0, 0.1);
`;

const Div = styled.div`
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
