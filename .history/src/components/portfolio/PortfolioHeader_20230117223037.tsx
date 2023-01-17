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
  padding: 1.2rem 1.6rem;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2``;

const Navbar = styled.ul`
  display: flex;
`;

const NavbarItem = styled.li``;
