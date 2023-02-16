import { isModifyModeFromPortfolioIntro } from '@src/store/portfolio/modify';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Container } from './modifyCommonStyledComponent';

type PropType = {
  handleSubmit?: () => void;
  isModifyMode: boolean;
  setIsModifyMode?: SetterOrUpdater<boolean>;
  handleCloseBtn?: () => void;
};

export default function ModifyComfirmAndCancleGroup({
  handleSubmit,
  isModifyMode,
  setIsModifyMode,
  handleCloseBtn,
}: PropType) {
  if (!isModifyMode) return <></>;

  const onClick = () => {
    handleSubmit && handleSubmit();
  };

  return (
    <Container>
      <ComfirmButton type={'submit'} onClick={onClick}>
        확인
      </ComfirmButton>
      <CancleButton
        onClick={() =>
          setIsModifyMode
            ? setIsModifyMode((e) => !e)
            : handleCloseBtn && handleCloseBtn()
        }
      >
        취소
      </CancleButton>
    </Container>
  );
}

const CommomButton = styled.button`
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 0.8rem 1rem;
  background: white;
  border-radius: 2rem;
  border: 1px solid black;
`;

const ComfirmButton = styled(CommomButton)``;

const CancleButton = styled(CommomButton)`
  margin-left: 0.8rem;
`;
