import styled from 'styled-components';

export default function PortfolioHeader() {
  return (
    <Container>
      <Title>유명수's Portfolio</Title>
      <Navbar>
        <NavbarItem>About me</NavbarItem>
        <NavbarItem>Skills</NavbarItem>
        <NavbarItem>Archiving</NavbarItem>
        <NavbarItem>Projects</NavbarItem>
      </Navbar>
    </Container>
  );
}

const Container = styled.header`
  height: 4rem;
  border: 1px solid black;
`;

const Title = styled.h2``;

const Navbar = styled.ul`
  display: flex;
`;

const NavbarItem = styled.li``;
