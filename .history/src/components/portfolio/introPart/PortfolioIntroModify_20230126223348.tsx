import { useState } from 'react';
import styled from 'styled-components';
import { PortfolioIntroPropType } from './portfolioIntroType';

export default function PortfolioIntroModify({
  title,
  description,
}: PortfolioIntroPropType) {
  const [info, setInfo] = useState<PortfolioIntroPropType>({
    title,
    description,
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
    <PortfolioSection>
      <IntroTitleInput
        type='text'
        name={'title'}
        onChange={onChange}
        value={info.title}
      />
      <IntroHr />
      <IntroDescriptionInput value={info.description} />
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
