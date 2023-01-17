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
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textColorToneDown};
  background: transparent;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontLargeSize};
`;

const Navbar = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  font-weight: 600;
  gap: 0.8rem;
`;

const NavbarItem = styled.li`
  color: ${({ theme }) => theme.textAccentColor};
`;

const PortfolioSectionContainer = styled.section``;
