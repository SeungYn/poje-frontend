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
  position: sticky;
  top: 0;
  height: 4.7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.8rem;
  border-bottom: 1px;
  background-color: red;
`;

const Div = styled.div`
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
