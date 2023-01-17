import React from 'react';
import styled from 'styled-components';
import PortfolioIntro from '../../components/portfolio/PortfolioIntro';

export default function PortfolioMain() {
  return (
    <Container>
      <PortfolioIntro />
    </Container>
  );
}

const Container = styled.main``;

const AboutMe = styled.section<{ imgUrl: string }>`
  position: relative;
  padding: 10rem 6rem 6rem 6rem;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-image: url(${BAKCGROUND_IMAGE});
    background-size: cover;
    background-position: center;
    filter: brightness(0.5);
    z-index: -1;
  }
`;

const PortfolioSectionContainer = styled.section`
  color: ${({ theme }) => theme.textAccentColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const IntroName = styled.h3`
  font-size: 3.4rem;
`;

const IntroTitle = styled.h3`
  color: ${({ theme }) => theme.textAccentColor};
  font-size: 3.4rem;
`;

const IntroHr = styled.hr`
  width: 30%;
  height: 5px;
  background: ${({ theme }) => theme.textAccentColor};
  border: none;
`;

const IntroParagraph = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  filter: brightness(0.9);
  letter-spacing: 2px;
  line-height: calc(${({ theme }) => theme.fontMiddleSize} + 0.4rem);
`;
