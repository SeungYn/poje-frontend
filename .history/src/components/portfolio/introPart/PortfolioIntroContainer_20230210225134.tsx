import React, { useState } from 'react';
import styled from 'styled-components';
import useModifyMode from '../../../hooks/useModifyMode';
import ModifyBtn from '../common/ModifyBtn';
import PortfolioIntro from './PortfolioIntro';
import PortfolioIntroModify from './PortfolioIntroModify';
import { PortfolioIntroPropType } from './portfolioIntroType';

const BAKCGROUND_IMAGE = `${process.env.PUBLIC_URL}/public_assets/portfolioBackground.jpg`;

export default function PortfolioIntroContainer() {
  const { isModifyMode, toggleModify } = useModifyMode();
  const [info, setInfo] = useState<PortfolioIntroPropType>({
    title: '제목을 입력해주세요.',
    description:
      '안녕하세요. <br /> 이세계에서는 장고 개발자가 된 유명수입니다. <br />현재 구골에 다니고 있으며 67세입니다.',
  });

  return (
    <>
      {!isModifyMode && (
        <PortfolioIntro title={info.title} description={info.description} />
      )}
      {isModifyMode && (
        <PortfolioIntroModify
          title={info.title}
          description={info.description}
        />
      )}
      <ModifyBtn isModifyMode={isModifyMode} handleModifyMode={toggleModify} />
    </>
  );
}

const Intro = styled.section<{ imgUrl: string }>`
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
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const InputTextContainer = styled.div`
  margin: 0 auto;
`;

const CommonTextInput = styled.input`
  border: none;
  background: transparent;
  text-align: center;
  width: 100%;
`;

const IntroTitle = styled.h3`
  color: white;
  font-size: 3.4rem;
`;

const IntroTitleInput = styled(CommonTextInput)`
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

const IntroDescriptionInput = styled.textarea`
  color: white;
  text-align: center;
  font-size: ${({ theme }) => theme.fontMiddleSize};
  filter: brightness(0.9);
  letter-spacing: 2px;
  line-height: calc(${({ theme }) => theme.fontMiddleSize} + 0.4rem);
  background: transparent;
  border: none;
  outline: none;
`;
