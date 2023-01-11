import styled from 'styled-components';

export default function MainHeader() {
  return (
    <Header>
      <Div>POJE</Div>
      <Nav>
        <div>포토폴리오보기</div>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  height: 4.7rem;
  width: 100%;
`;

const Div = styled.div``;

const Nav = styled.nav``;
