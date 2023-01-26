import { useEffect, useRef, useState } from 'react';
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
  const titleRef = useRef<HTMLInputElement>();

  useEffect(() => {}, []);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        return setInfo((e) => ({ ...e, title: value }));
      case 'description':
        return setInfo((e) => ({ ...e, description: value }));
    }
  };

  return (
    <PortfolioSection>
      <IntroTitleInput
        ref={titleRef}
        type='text'
        name={'title'}
        onChange={onChange}
        value={info.title}
      />
      <IntroHr />
      <IntroDescriptionInput
        name={'description'}
        value={info.description}
        onChange={onChange}
      />
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
`;
