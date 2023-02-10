import useGetPortfolioIntro from '@src/hooks/portfolio/portfolioIntro';
import { useRef } from 'react';
import styled from 'styled-components';
import { PortfolioIntroPropType } from './portfolioIntroType';

export default function PortfolioIntro({
  title,
  description,
}: PortfolioIntroPropType) {
  return (
    <PortfolioSection>
      <IntroTitle>{title}</IntroTitle>
      <IntroHr />
      <IntroDescription>{description}</IntroDescription>
    </PortfolioSection>
  );
}

const PortfolioSection = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const IntroTitle = styled.h3`
  color: white;
  font-size: 3.4rem;
`;

const IntroHr = styled.hr`
  width: 30%;
  height: 5px;
  background: ${({ theme }) => theme.textAccentColor};
  border: none;
`;

const IntroDescription = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  filter: brightness(0.9);
  letter-spacing: 2px;
  line-height: calc(${({ theme }) => theme.fontMiddleSize} + 0.4rem);
`;
