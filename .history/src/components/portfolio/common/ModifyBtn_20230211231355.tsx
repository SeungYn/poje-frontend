import { isModifyModeFromPortfolioIntro } from '@src/store/portfolio/modify';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

export interface ModifyBtnType {
  isModifyMode: boolean;
  handleSubmit?: () => void;
  handleCancle?: () => void;
  handleModifyMode?: () => void;
}

export default function ModifyBtn({
  isModifyMode,
  handleModifyMode,
}: ModifyBtnType) {
  const [isModify, setIsModify] = useRecoilState(
    isModifyModeFromPortfolioIntro
  );
  if (!isModify) return;
  return (
    <Container>
      <ModifyButton onClick={handleModifyMode}>수정</ModifyButton>
    </Container>
  );
}

const Container = styled.article`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

const CommomButton = styled.button`
  font-size: ${({ theme }) => theme.fontRegular};
  padding: 0.8rem 1rem;
  background: white;
  border-radius: 2rem;
  border: 1px solid black;
`;

const ModifyButton = styled(CommomButton)``;

const ComfirmButton = styled(CommomButton)``;

const CancleButton = styled(CommomButton)`
  margin-left: 0.8rem;
`;
