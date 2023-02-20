import { isDisapperIntro } from '@src/store/portfolio/header';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';

export default function PortfolioHeader() {
  const isIntroDisapper = useRecoilValue(isDisapperIntro);
  return (
    <Container isIntroDisapper={isIntroDisapper}>
      <Title>Poje</Title>
      <Navbar>
        <NavbarItem>About me</NavbarItem>
        <NavbarItem>Skills</NavbarItem>
        <NavbarItem>Archiving</NavbarItem>
        <NavbarItem>Projects</NavbarItem>
      </Navbar>
    </Container>
  );
}

const Container = styled.header<{ isIntroDisapper: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2rem 2.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textColorToneDown};
  background: transparent;
  z-index: 100;
  transition: all 0.3s ease-in;
  ${({ isIntroDisapper }) => {
    if (isIntroDisapper) {
      return css`
        background: white;
        color: black;
        box-shadow: 1px 1px 10px #7c7c7c;
      `;
    }
    return css`
      background: transparent;
    `;
  }}
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontLargeSize};
  &:hover {
    color: ${({ theme }) => theme.textAccentColor};
  }
`;

const Navbar = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  font-weight: 600;
  gap: 0.8rem;
`;

const NavbarItem = styled.li`
  &:hover {
    color: ${({ theme }) => theme.textAccentColor};
  }
`;
