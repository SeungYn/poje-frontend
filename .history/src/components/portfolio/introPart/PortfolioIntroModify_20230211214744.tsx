import usePortfolioIntro from '@src/hooks/portfolio/usePortfolioIntro';
import usePortfolioModifyForm from '@src/hooks/portfolio/usePortfolioModifyForm';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Intro } from './commonIntroStyledComponent';
import { PortfolioIntroPropType } from './portfolioIntroType';

export default function PortfolioIntroModify({
  title,
  description,
}: PortfolioIntroPropType) {
  const {
    copiedPfIntro,
    setCopiedPfIntro,
    onChangeInputEl,
    onChangeTextArea,
    discriptionRef,
  } = usePortfolioModifyForm();
  const titleRef = useRef<HTMLInputElement>(null);
  const hiddenFileBtnRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  useEffect(() => {
    console.log(copiedPfIntro);
  }, [copiedPfIntro]);

  return (
    <ModifyIntro
      imgUrl={copiedPfIntro.backgroundImg}
      onClick={(e) => {
        if (e.currentTarget === e.target) hiddenFileBtnRef.current?.click();
      }}
    >
      <input
        ref={hiddenFileBtnRef}
        type='file'
        style={{ display: 'none' }}
        accept={'image/gif, image/jpeg, image/png'}
        name={'file'}
        onChange={onChangeInputEl}
      />
      <PortfolioSection>
        <IntroTitleInput
          ref={titleRef}
          type='text'
          name={'title'}
          onChange={onChangeInputEl}
          value={copiedPfIntro.title}
        />
        <IntroHr />
        <IntroDescriptionInput
          ref={discriptionRef}
          name={'description'}
          value={copiedPfIntro.description}
          onChange={onChangeTextArea}
        />
      </PortfolioSection>
    </ModifyIntro>
  );
}

// &:hover::before {
//   content: '';
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -2;
//   background-color: rgba(97, 97, 97, 0.053);
// }

const ModifyIntro = styled(Intro)`
  cursor: pointer;
  background-size: cover;

  &:hover {
    background-color: rgba(183, 183, 183, 0.374);
  }

  &:hover::after {
    content: '테두리를 클릭시 배경화면을 바꿀수 있습니다.';
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

const PortfolioSection = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 10;
`;

const CommonTextInput = styled.input`
  border: none;
  background: transparent;
  text-align: center;
  width: 100%;
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
  width: 100%;
`;
