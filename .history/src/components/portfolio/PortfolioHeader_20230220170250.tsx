import { isDisapperIntro } from '@src/store/portfolio/header';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';

export default function PortfolioHeader() {
  const isIntroDisapper = useRecoilValue(isDisapperIntro);
  return (
    <Container isIntroDisapper={isIntroDisapper}>
      <Title isIntroDisapper={isIntroDisapper}>Poje</Title>
      <Navbar>
        <NavbarItem
          isIntroDisapper={isIntroDisapper}
          data-link='#intro'
          onClick={moverToPart}
        >
          Intro
        </NavbarItem>
        <NavbarItem
          isIntroDisapper={isIntroDisapper}
          data-link='#aboutme'
          onClick={moverToPart}
        >
          About Me
        </NavbarItem>
        <NavbarItem
          isIntroDisapper={isIntroDisapper}
          data-link='#skills'
          onClick={moverToPart}
        >
          Skills
        </NavbarItem>
        <NavbarItem
          isIntroDisapper={isIntroDisapper}
          data-link='#projects'
          onClick={moverToPart}
        >
          Projects
        </NavbarItem>
      </Navbar>
    </Container>
  );
}

function moverToPart(e: React.MouseEvent) {
  const target = e.target as HTMLLIElement;
  console.log(target);
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

const Title = styled.h1<{ isIntroDisapper: boolean }>`
  font-size: ${({ theme }) => theme.fontLargeSize};
  &:hover {
    color: ${({ isIntroDisapper }) => (isIntroDisapper ? '#7c7c7c' : 'white')};
  }
  cursor: pointer;
`;

const Navbar = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  font-weight: 600;
  gap: 0.8rem;
`;

const NavbarItem = styled.li<{ isIntroDisapper: boolean }>`
  &:hover {
    color: ${({ isIntroDisapper }) => (isIntroDisapper ? '#7c7c7c' : 'white')};
  }
  cursor: pointer;
`;
