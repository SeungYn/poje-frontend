import { isDisapperIntro } from '@src/store/portfolio/header';
import { breakPoint } from '@src/styledComponents/media';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled, { css } from 'styled-components';

export default function PortfolioHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isIntroDisapper = useRecoilValue(isDisapperIntro);
  
  return (
    <Container isIntroDisapper={isIntroDisapper} isOpen={isOpen}>
      <Title
        isIntroDisapper={isIntroDisapper}
        isOpen={ isOpen}
        onClick={() => {
          navigate('/job');
        }}
      >
        Poje
      </Title>
      <Navbar isOpen={ isOpen}>
        <NavbarItem
          isOpen={ isOpen}
          isIntroDisapper={isIntroDisapper}
          data-link='#intro'
          onClick={moverToPart}
        >
          Intro
        </NavbarItem>
        <NavbarItem
          isOpen={ isOpen}
          isIntroDisapper={isIntroDisapper}
          data-link='#aboutme'
          onClick={moverToPart}
        >
          About Me
        </NavbarItem>
        <NavbarItem
          isOpen={ isOpen}
          isIntroDisapper={isIntroDisapper}
          data-link='#skills'
          onClick={moverToPart}
        >
          Skills
        </NavbarItem>
        <NavbarItem
          isOpen={ isOpen}
          isIntroDisapper={isIntroDisapper}
          data-link='#projects'
          onClick={moverToPart}
        >
          Projects
        </NavbarItem>
      </Navbar>
      <HamburgerButton isOpen={ isOpen}
          isIntroDisapper={isIntroDisapper} onClick={()=>setIsOpen(f=>!f) }><GiHamburgerMenu className='icon'/></HamburgerButton>
    </Container>
  );
}

function moverToPart(e: React.MouseEvent) {
  const target = e.target as HTMLLIElement;
  const targetPart = document.querySelector(`${target.dataset.link}`);
  targetPart?.scrollIntoView({ behavior: 'smooth' });
}

const Container = styled.header<{ isIntroDisapper: boolean; isOpen: boolean; }>`
  position: fixed;
  width:100%;
  top: 0;
  right:0;
  left:0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textColorToneDown};
  background: transparent;
  z-index: 100;
  transition: all 0.3s ease-in;

  ${({ isIntroDisapper ,isOpen}) => {
    if (isIntroDisapper || isOpen) {
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
  
  @media screen and (max-width:${breakPoint.mm}){
    flex-direction:column;
    align-items:flex-start;
    
  }


`;

const Title = styled.h1<{ isIntroDisapper: boolean; isOpen: boolean; }>`
  font-size: ${({ theme }) => theme.fontLargeSize};
  &:hover {
    color: ${({ isIntroDisapper,isOpen }) => (isIntroDisapper || isOpen ? '#7c7c7c' : 'white')};
  }
  cursor: pointer;
`;

const Navbar = styled.ul<{ isOpen: boolean; }>`
  display: flex;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  font-weight: 600;
  gap: 0.8rem;

  @media screen and (max-width:${breakPoint.mm}){
    display:${({isOpen})=>isOpen ? 'block' : 'none'};
    flex-direction: column;
    align-self: center;
    width:100%;
    text-align: center;
  }
`;

const NavbarItem = styled.li<{ isIntroDisapper: boolean; isOpen: boolean; }>`
  &:hover {
    color: ${({ isIntroDisapper,isOpen }) => (isIntroDisapper || isOpen ? '#7c7c7c' : 'white')};
  }
  @media screen and (max-width:${breakPoint.mm}){
    padding:auto;
  }
  cursor: pointer;
`;

const HamburgerButton = styled.button<{ isIntroDisapper: boolean; isOpen: boolean; }>`
  position:absolute;
  display:none;
  right:1rem;
  color: ${({ theme ,isOpen, isIntroDisapper}) => (isIntroDisapper || isOpen  ?  'black' : theme.textColorToneDown)};
  font-size:3rem;
  top:1rem;
  &:hover {
    color: ${({ isIntroDisapper,isOpen }) => (isIntroDisapper || isOpen ? '#7c7c7c' : 'white')};
  }

  @media screen and (max-width:${breakPoint.mm}){
    display:block;
  }
`