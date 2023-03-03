import styled from 'styled-components';

export default function Navbar() {
  return (
    <Container>
      <MemberNavbar></MemberNavbar>
    </Container>
  );
}

const Container = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
`;

const MemberNavbar = styled.nav``;
