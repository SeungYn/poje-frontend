import { isModifyModeFromPortfolioIntro } from '@src/store/portfolio/modify';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Container } from './modifyCommonStyledComponent';

type PropType = {
  handleSubmit?: () => void;
  isModifyMode?: boolean;
  setIsModifyMode?: SetterOrUpdater<boolean>;
  handleCloseBtn?: () => void;
};

/**
 *
 * setIsModifyMode 으로 수정모드 취소 콜백을 받는데 handleCloseBtn으로 통합할 예정
 */

//수정모드가 되었다는 것은 무조건 수정모드임 결국 이 확인 취소 버튼은 수정모드 일때만 열리는데 열렸는지 닫혔는지 얘가 알필요가 없음

export default function ModifyComfirmAndCancleGroup({
  handleSubmit,
  isModifyMode,
  setIsModifyMode,
  handleCloseBtn,
}: PropType) {
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
