import styled from 'styled-components';
import LoginView from './LoginView';

export default function MainHeader() {
  return (
    <Header>
      <Div>POJE</Div>
      <Div>
        <Nav>
          <div>포토폴리오보기</div>
          <div>포토폴리오보기</div>
        </Nav>
        <LoginView />
      </Div>
    </Header>
  );
}

const Header = styled.header`
  height: 4.7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.8rem;
`;

const Div = styled.div``;

const Nav = styled.nav`
  display: flex;
`;
