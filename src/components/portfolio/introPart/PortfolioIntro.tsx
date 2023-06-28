import usePortfolioIntro from '@src/hooks/portfolio/intro/usePortfolioIntro';
import { isModifyModeFromPortfolioIntro } from '@src/store/portfolio/modify';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import ModifyBtn from '../common/ModifyBtn';
import { Intro } from './commonIntroStyledComponent';

export default function PortfolioIntro() {
  const { pfIntro } = usePortfolioIntro();
  const setIsModifyMode = useSetRecoilState(isModifyModeFromPortfolioIntro);
  return (
    <Intro imgUrl={pfIntro.backgroundImg}>
      <PortfolioSection>
        <IntroTitle>{pfIntro.title}</IntroTitle>
        <IntroHr />
        <IntroDescription>{pfIntro.description}</IntroDescription>
      </PortfolioSection>
      <ModifyBtn handleModifyMode={() => setIsModifyMode(true)} />
    </Intro>
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
  text-align: center;
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
  white-space: pre-line;
`;
