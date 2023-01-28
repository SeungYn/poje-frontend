import React, { useState } from 'react';
import styled from 'styled-components';
import useModifyMode from '../../hooks/useModifyMode';
import ModifyBtn from './common/ModifyBtn';

const BAKCGROUND_IMAGE = `${process.env.PUBLIC_URL}/public_assets/portfolioBackground.jpg`;

export default function PortfolioIntro() {
  const { isModifyMode, toggleModify } = useModifyMode();
  const [info, setInfo] = useState({
    title: '제목을 입력해주세요.',
    description:
      '안녕하세요. <br /> 이세계에서는 장고 개발자가 된 유명수입니다. <br />현재 구골에 다니고 있으며 67세입니다.',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        return setInfo((e) => ({ ...e, title: value }));
    }
  };

  return (
    <Intro imgUrl={BAKCGROUND_IMAGE}>
      <PortfolioSectionContainer>
        <IntroTitle>{info.title}</IntroTitle>

        {/* <IntroTitleInput
          type='text'
          name={'title'}
          size={(info.title.length || 1) + (!info.title.length ? 0 : 3)}
          onChange={onChange}
        /> */}

        <IntroHr />
        <IntroDescription
          dangerouslySetInnerHTML={{ __html: info.description }}
        ></IntroDescription>
      </PortfolioSectionContainer>
      <ModifyBtn isModifyMode={isModifyMode} handleModifyMode={toggleModify} />
    </Intro>
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
  color: ${({ theme }) => theme.textAccentColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const inputTextContainer = styled.div``;

const CommonTextInput = styled.input`
  border: none;
  background: transparent;
`;

const IntroTitle = styled.h3`
  color: ${({ theme }) => theme.textAccentColor};
  font-size: 3.4rem;
`;

const IntroTitleInput = styled(CommonTextInput)`
  display: inline-block;
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
