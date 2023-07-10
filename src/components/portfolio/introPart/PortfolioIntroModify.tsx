import usePortfolioModifyForm from '@src/hooks/portfolio/intro/usePortfolioModifyForm';
import { isModifyModeFromPortfolioIntro } from '@src/store/portfolio/modify';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import LoadingSpiner from '../common/LoadingSpiner';
import ModifyComfirmAndCancleGroup from '../common/ModifyComfirmAndCancleGroup';
import { Intro } from './commonIntroStyledComponent';
import usePortfolioIntro from '@src/hooks/portfolio/intro/usePortfolioIntro';

export default function PortfolioIntroModify() {
  const { pfIntro, isMutating, isFetching, updateIntro } = usePortfolioIntro();
  const { copiedPfIntro, onChangeInputEl, discriptionRef, handleSubmit } =
    usePortfolioModifyForm({
      originIntroData: pfIntro,
      updateIntro,
    });

  const titleRef = useRef<HTMLInputElement>(null);
  const hiddenFileBtnRef = useRef<HTMLInputElement>(null);
  const [isModifyMode, setIsModifyMode] = useRecoilState(
    isModifyModeFromPortfolioIntro
  );
  const isLoading = isMutating || isFetching;

  useEffect(() => {
    //처음 수정모드로 들어 갔을때 타이틀에 포커스
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  return (
    <ModifyIntro
      onSubmit={handleSubmit}
      as='form'
      imgUrl={copiedPfIntro.backgroundImg}
      onClick={(e) => {
        if (e.currentTarget === e.target) hiddenFileBtnRef.current?.click();
      }}
    >
      {isLoading && <LoadingSpiner text='업데이트중' />}
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
          onChange={onChangeInputEl}
        />
      </PortfolioSection>
      <ModifyComfirmAndCancleGroup
        isModifyMode={isModifyMode}
        setIsModifyMode={setIsModifyMode}
        handleSubmit={() => {
          console.log('확인');
        }}
      />
    </ModifyIntro>
  );
}

const ModifyIntro = styled(Intro)`
  cursor: pointer;

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
  height: auto;
  resize: none;
`;
